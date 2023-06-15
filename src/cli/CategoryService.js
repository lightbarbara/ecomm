import chalk from "chalk"

const url = 'http://localhost:3000/categories'

function handleError(error) {
    throw new Error(chalk.red(error.code))
}

async function handleResponse(res) {
    const { status } = res

    const json = await res.json()

    console.log(`response status: ${status}`)

    if (res.status === 200) {
        console.log(json)
    }
}

export default class CategoryService {
    static async findCategories() {
        try {
            const categories = await fetch(url)
            await handleResponse(categories)
        } catch (err) {
            handleError(err)
        }
    }
}