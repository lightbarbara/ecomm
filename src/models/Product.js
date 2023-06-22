import mongoose from 'mongoose';

function validateName(name) {
  const regex = /^[^0-9][A-z]{2,}$/gm;
  return regex.test(name);
}

function validateSlug(slug) {
  const regex = /^[A-z0-9-]*$/gm;
  return regex.test(slug);
}

const productSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: {
    type: String, required: true, minlength: 3, validate: validateName,
  },
  descricao: { type: String },
  slug: { type: String, required: true, validate: validateSlug },
  preco: { type: mongoose.Schema.Types.Decimal128, required: true, min: 0 },
  estoque: {
    type: Number, required: true, min: 0, max: 10000,
  },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true },
}, {
  strict: 'throw'
});

const products = mongoose.model('products', productSchema);

export default products;
