'use strict';
const { DataTypes } = require('sequelize');
const { pool, schema } = require('../pool');
//const Customer = require('./customer');

const Account = pool.define('account', {
    id_account: { type: DataTypes.INTEGER, primaryKey: true },
    number: { type: DataTypes.STRING },
    id_customer: {
        type: DataTypes.INTEGER, references: {
            modelName: 'customer', key: 'id_customer'
        }
    }
}, {
    schema: schema,
    timestamps: false,
    tableName: 'customer',
    
});

//Account.hasMany(Customer, { as: 'customer', foreignKey: 'id_customer' });

module.exports = Account;