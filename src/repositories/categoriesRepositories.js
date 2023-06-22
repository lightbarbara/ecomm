import categories from '../models/Category.js';

class CategoryRepositories {
  static listCategories = () => categories.find();

  static createCategory = async (category) => {
    const categoryOnDB = new categories(category);
    await categoryOnDB.save();
    return categoryOnDB;
  };

  static getCategoryById = async (id) => {
    const category = await categories.findById(id);
    if (!category) {
      const err = new Error('Invalid Id');
      err.name = 'CastError';
      throw err;
    }
    return category;
  };

  static updateCategory = async (id, updatedCategory) => {
    const category = await categories.findByIdAndUpdate(id, { $set: updatedCategory }, { runValidators: true, new: true });
    if (!category) {
      const err = new Error('Invalid Id');
      err.name = 'CastError';
      throw err;
    }
    return category;
  };

  static deleteCategory = async (id) => {
    const category = await categories.findByIdAndDelete(id);
    if (!category) {
      const err = new Error('Invalid Id');
      err.name = 'CastError';
      throw err;
    }
    return category;
  };

  static activateCategory = async (id) => {
    const outdatedCategory = await this.getCategoryById(id);
    if (!outdatedCategory) {
      const err = new Error('Invalid Id');
      err.name = 'CastError';
      throw err;
    }
    const category = await categories.findByIdAndUpdate(id, { $set: { nome: outdatedCategory.nome, status: 'ATIVA' }}, {runValidators: true, new: true} );
    return category;
  };
}

export default CategoryRepositories;
