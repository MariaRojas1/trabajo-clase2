const router = require('express').Router();
const rolesController = require('../controllers/rolesController');

router.get('/obtener', rolesController.obtenerRoles);

module.exports = router;