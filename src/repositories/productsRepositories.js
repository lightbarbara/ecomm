import products from '../models/Product.js';

class ProductRepositories {
  static listProducts = () => products.find().populate('categoria', ['nome', 'status']);

  static createProduct = async (product) => {
    const productOnDB = new products(product);
    await productOnDB.save();
    return productOnDB;
  };

  static getProductById = async (id) => {
    const product = await products.findById(id).populate('categoria', ['nome', 'status']);
    if (!product) {
      const err = new Error('Invalid Id');
      err.name = 'CastError';
      throw err;
    }
    return product;
  };

  static updateProduct = async (id, updatedProduct) => {
    const product = await products.findByIdAndUpdate(id, { $set: updatedProduct }, { runValidators: true, new: true }).populate('categoria', ['nome', 'status']);
    if (!product) {
      const err = new Error('Invalid Id');
      err.name = 'CastError';
      throw err;
    }
    return product;
  };

  static deleteProduct = async (id) => {
    const product = await products.findByIdAndDelete(id);
    if (!product) {
      const err = new Error('Invalid Id');
      err.name = 'CastError';
      throw err;
    }
    return product;
  };
}

export default ProductRepositories;
