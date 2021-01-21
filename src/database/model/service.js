const Sequellize = require('sequelize');
const { pool, schema } = require('../pool');

const Service = pool.define('service', {
    id_service: { type: Sequellize.INTEGER, primaryKey: true },
    name: { type: Sequellize.STRING },
    price: { type: Sequellize.STRING },
    status: { type: Sequellize.STRING },
    observation: { type: Sequellize.STRING }
}, {
    schema: schema,
    timestamps: false,
    tableName: 'customer'
});

module.exports = Service;