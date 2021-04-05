const { createPool, Pool } = require('mysql');
const { promisify }  = require('util');

const pool = createPool({
    host:'localhost',
    user:'root',
    password: '',
    database:'trabajo_clase'
});

pool.getConnection((error, connection) => {
    if (error) {
        console.log(error);
    } else {
        pool.releaseConnection(connection);
        console.log("DB IS CONNECTED")
    }
});

pool.query = promisify(pool.query) ;

module.exports = pool;