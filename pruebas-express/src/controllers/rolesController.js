const rolesModel = require('../models/rolesModel');
const controller = {};

controller.obtenerRoles = async (req, res) => {
    const resultados = await rolesModel.obtenerRoles();
    res.json({
        roles: resultados
    })
}


module.exports = controller;