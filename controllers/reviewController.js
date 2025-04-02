import Review from '../models/Review.js';
import Cake from '../models/Cake.js';

export const addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const cakeId = req.params.cakeId;

    const review = await Review.create({ user: req.user.id, cake: cakeId, rating, comment });
    await Cake.findByIdAndUpdate(cakeId, { $push: { reviews: review._id } });

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
