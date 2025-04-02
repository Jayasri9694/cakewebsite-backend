import jwt from "jsonwebtoken";
import User from "../models/User.js"; // Ensure correct path

const authMiddleware = async (req, res, next) => {
  let token;

  // Check if the Authorization header is present
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Extract the token
      token = req.headers.authorization.split(" ")[1];

      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user info to request object
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Proceed to the next middleware
    } catch (error) {
      res.status(401).json({ message: "Invalid token, authorization denied" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized, no token provided" });
  }
};

export default authMiddleware;
