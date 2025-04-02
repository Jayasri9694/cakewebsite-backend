import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cake: { type: mongoose.Schema.Types.ObjectId, ref: 'Cake', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: String,
}, { timestamps: true });

export default mongoose.model('Review', reviewSchema);
