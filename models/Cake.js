import mongoose from 'mongoose';

const cakeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  imageUrl: String,
  category: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

export default mongoose.model('Cake', cakeSchema);
