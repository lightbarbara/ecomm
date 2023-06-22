import categories from '../models/Category.js';

class CategoryRepositories {
  static listCategories = () => categories.find();

  static createCategory = (category) => {
    const categoryOnDB = new categories(category);
    categoryOnDB.save();
    return categoryOnDB;
  };

  static getCategoryById = (id) => {
    const category = categories.findById(id);
    return category
  }
}

export default CategoryRepositories;
