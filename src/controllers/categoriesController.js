import CategoryRepositories from '../repositories/categoriesRepositories.js';

class CategoryController {
  static listCategories = async (req, res) => {
    try {
      const categoriesList = await CategoryRepositories.listCategories();
      return res.status(200).json(categoriesList);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: err.message });
    }
  };

  static createCategory = async (req, res) => {
    try {
      const category = await CategoryRepositories.createCategory(req.body);
      return res.status(201).send(category);
    } catch (err) {
      console.log(err);
      if (err.name === 'StrictModeError' || err.name === 'ValidationError') {
        return res.status(422).send({ message: err.message });
      }
      return res.status(500).send({ message: err.message });
    }
  };

  static getCategoryById = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await CategoryRepositories.getCategoryById(id);
      return res.status(200).json(category);
    } catch (err) {
      console.log(err);
      if (err.name === 'CastError') {
        return res.status(404).send({ message: err.message });
      }
      return res.status(500).send({ message: err.message });
    }
  };

  static updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await CategoryRepositories.updateCategory(id, req.body);
      return res.status(200).json(category);
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

  static deleteCategory = async (req, res) => {
    try {
      const { id } = req.params;
      await CategoryRepositories.deleteCategory(id);
      return res.sendStatus(204);
    } catch (err) {
      console.log(err);
      if (err.name === 'CastError') {
        return res.status(404).send({ message: err.message });
      }
      return res.status(500).send({ message: err.message });
    }
  };

  static activateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await CategoryRepositories.activateCategory(id);
      return res.status(200).send(category);
    } catch (err) {
      console.log(err);
      if (err.name === 'CastError') {
        return res.status(404).send({ message: err.message });
      }
      return res.status(500).send({ message: err.message });
    }
  };
}

export default CategoryController;
