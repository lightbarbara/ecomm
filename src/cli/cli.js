import CategoryService from "./CategoryService.js"

const command = process.argv

async function processarComando(args) {
    const command = args[2]
    switch (command) {
        case '--listarCategorias':
            await CategoryService.findCategories()
            break
    }
}

await processarComando(command)