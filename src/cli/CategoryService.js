import chalk from "chalk"
import fs from 'fs'

const url = 'http://localhost:3000/categories'

function handleError(error) {
    throw new Error(chalk.red(error.code))
}

async function handleResponse(res) {
    const { status } = res

    const json = await res.json()

    console.log(`response status: ${status}`)

    if ([200, 201].includes(res.status)) {
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

    static async findCategoryById(id) {
        try {
            const category = await fetch(`${url}/${id}`)
            await handleResponse(category)
        } catch (err) {
            handleError(err)
        }
    }

    static async createCategory(category) {
        try {
            const catString = await fs.promises.readFile(category, 'utf-8')

            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: catString
            })

            await handleResponse(res)
        } catch (err) {
            handleError(err)
        }
    }

    static async updateCategory(id, category) {
        try {
            const catString = await fs.promises.readFile(category, 'utf-8')

            const res = await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: catString
            })

            await handleResponse(res)
        } catch (err) {
            handleError(err)
        }
    }

    static async deleteCategory(id) {
        try {
            const res = await fetch(`${url}/${id}`, {
                method: 'DELETE'
            })

            await handleResponse(res)
        } catch (err) {
            console.log(err)
            handleError(err)
        }
    }
}