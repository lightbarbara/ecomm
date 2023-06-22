import categories from '../models/Category.js';

class CategoryRepositories {
  static listCategories = () => categories.find();

  static createCategory = async (category) => {
    const categoryOnDB = new categories(category);
    await categoryOnDB.save();
    return categoryOnDB;
  };

  static getCategoryById = (id) => {
    const category = categories.findById(id);
    return category;
  };

  static updateCategory = (id, updatedCategory) => {
    const category = categories.findByIdAndUpdate(id, { $set: updatedCategory }, { runValidators: true, new: true });
    return category;
  };

  static deleteCategory = (id) => {
    const category = categories.findByIdAndDelete(id);
    return category;
  };
}

export default CategoryRepositories;
