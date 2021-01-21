const { DataTypes } = require('sequelize');
const { pool, schema } = require('../pool');
const { tableName } = require('./account');
//const Account = require('./account');

const Customer = pool.define('Customer', {
    id_customer: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    document: { type: DataTypes.STRING },
}, {
    schema: schema,
    timestamps: false,
    tableName: 'customer'
});

//Customer.belongsTo(Account, { as: 'account', foreignKey: 'id_customer' });

module.exports = Customer;