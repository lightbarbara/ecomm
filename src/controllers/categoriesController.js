import categories from '../models/Category.js';

class CategoryController {
  static listCategories = async (req, res) => {
    try {
      const categoriesList = await categories.find();
      return res.status(200).json(categoriesList);
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  };
}

export default CategoryController;
