import Categories from '../models/Category.js';

class CategoryController {
  static listCategories = async (req, res) => {
    try {
      const categoriesList = await categories.find();
      return res.status(200).json(categoriesList);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: err.message });
    }
  };

  static createCategory = async (req, res) => {
    try {
      const category = new Categories(req.body);
      await category.save();

      return res.status(201).send(category.toJSON());
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: err.message });
    }
  };
}

export default CategoryController;
