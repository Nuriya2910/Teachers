const { Router } = require('express')
const route = Router()

const { 
    index, 
    show,
    create, 
    remove, 
    update 
} = require('../controllers/teachers')


route.get('/', index)

route.get('/:id', show )

route.post('/', create )

route.delete('/:id', remove)

route.put('/:id', update)

module.exports = route


