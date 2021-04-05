const pool = require('../config/database');

const model = {};

model.obtenerRoles = () => {
    const sql = 'SELECT * FROM roles';
    return pool.query(sql);
}



module.exports = model;