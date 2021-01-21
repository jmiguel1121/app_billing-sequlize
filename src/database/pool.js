const { Sequelize } = require("sequelize");
const config = require('../config/env');

const schema = config.db.schema;

const pool = new Sequelize(
    config.db.name,
    config.db.user,
    config.db.pass,
    {
        hosts: config.db.host,
        port:config.db.port,
        dialect: config.db.name,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        }
    }
);

module.exports = { pool, schema };