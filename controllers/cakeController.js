import Cake from '../models/Cake.js';

export const getCakes = async (req, res) => {
  try {
    const cakes = await Cake.find().populate('reviews');
    res.json(cakes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const addCake = async (req, res) => {
  try {
    const { name, description, price, imageUrl, category } = req.body;
    const newCake = await Cake.create({ name, description, price, imageUrl, category });
    res.status(201).json(newCake);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getCakeById = async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id).populate('reviews');
    if (!cake) return res.status(404).json({ message: 'Cake not found' });
    res.json(cake);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
