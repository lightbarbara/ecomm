import CategoryService from './CategoryService.js';

const commands = process.argv;

async function processarComando(args) {
  const command = args[2];
  const id = args[3];
  const addedCategory = args[3];
  const updatedCategory = args[4];

  switch (command) {
    case '--listarCategorias':
      await CategoryService.findCategories();
      break;
    case '--recuperarCategoriaPorId':
      await CategoryService.findCategoryById(id);
      break;
    case '--inserirCategoria':
      await CategoryService.createCategory(addedCategory);
      break;
    case '--atualizarCategoria':
      await CategoryService.updateCategory(id, updatedCategory);
      break;
    case '--excluirCategoria':
      await CategoryService.deleteCategory(id);
      break;
  }
}

await processarComando(commands);
