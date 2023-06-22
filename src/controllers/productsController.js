import ProductRepositories from '../repositories/productsRepositories.js';

class ProductController {
  static listProducts = async (req, res) => {
    try {
      const productsList = await ProductRepositories.listProducts();
      return res.status(200).json(productsList);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: err.message });
    }
  };

  static createProduct = async (req, res) => {
    try {
      const product = await ProductRepositories.createProduct(req.body);
      return res.status(201).send(product);
    } catch (err) {
      console.log(err);
      if (err.name === 'StrictModeError' || err.name === 'ValidationError') {
        return res.status(422).send({ message: err.message });
      }
      return res.status(500).send({ message: err.message });
    }
  };

  static getProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductRepositories.getProductById(id);
      return res.status(200).json(product);
    } catch (err) {
      console.log(err);
      if (err.name === 'CastError') {
        return res.status(404).send({ message: err.message });
      }
      return res.status(500).send({ message: err.message });
    }
  };

  static updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductRepositories.updateProduct(id, req.body);
      return res.status(200).json(product);
    } catch (err) {
      console.log(err);
      if (err.name === 'CastError') {
        return res.status(404).send({ message: err.message });
      }
      if (err.name === 'StrictModeError' || err.name === 'ValidationError') {
        return res.status(422).send({ message: err.message });
      }
      return res.status(500).send({ message: err.message });
    }
  };

  static deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      await ProductRepositories.deleteProduct(id);
      return res.sendStatus(204);
    } catch (err) {
      console.log(err);
      if (err.name === 'CastError') {
        return res.status(404).send({ message: err.message });
      }
      return res.status(500).send({ message: err.message });
    }
  };
}

export default ProductController;
