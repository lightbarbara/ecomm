import mongoose from 'mongoose';

function validateName(name) {
  const regex = /^[^0-9][A-z]{2,}$/gm;
  return regex.test(name);
}

const categorySchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: {
    type: String, required: true, minlength: 3, validate: validateName,
  },
  status: { type: String, required: true },
});

const categories = mongoose.model('categories', categorySchema);

export default categories;
