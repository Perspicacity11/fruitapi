const Fruit = require('../models/Fruit')

const index = async (request, response) => {
    try { 
        const fruits = await Fruit.showAll()
        response.status(200).send(fruits)
    }
    catch (error) {
        response.status(500).send({error: "Server error"})
    }
}

const show = async (request, response) => {
    const name = request.params.name.toLowerCase()
    try {
        const fruit = await Fruit.show(name)
        response.status(200).send(fruit)
    }
    catch {
        //fill in error handling
    }
} 

const create = async (request, response) => {
    try {
        const newFruit = await Fruit.create(request.body)
        response.status(201).send(newFruit)
    }
    catch (error) {
        response.status(409).send(error)
    }
}

const update = async (request, response) => {
    const name = request.params.name.toLowerCase()
        
    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.update(request.body)

        response.status(200).send(result)
    } catch (error) {
        response.status(404).send({error: 'not found'})
    }
}

const destroy = async (request, response) => {
    const name = request.params.name.toLowerCase()

    try {
        const fruit = await Fruit.show(name)
        const result = await fruit.destroy()

        response.sendStatus(204)
    }
    catch {
        response.status(404).send({error: error})
    }
}


module.exports = {
    index, show, create, update, destroy
}