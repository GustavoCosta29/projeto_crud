const router = require('express').Router()


const CustomersController = require('../controllers/customers')
const indexController = require('../controllers/index')

// rotas
router.get('/', indexController.index )



// registro
router.get('/register', CustomersController.index )
router.post('/register/add', CustomersController.add) 



//listar
router.get('/list', CustomersController.listUsers)
   





module.exports = router