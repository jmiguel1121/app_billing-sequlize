const Sequellize = require('sequelize');
const { pool, schema } = require('../pool');
const Account = require('./account');

const Bill = pool.define('bill', {
    id_bill: { type: Sequellize.INTEGER, primaryKey: true },
    number: { type: Sequellize.STRING },
    status: { type: Sequellize.STRING },
    id_account: { type: Sequellize.INTEGER }
}, {
    schema: schema,
    timestamps: false,
    tableName: 'customer'
});

Bill.hasMany(Account, { foreignKey: 'id_account', sourceKey: 'id_account' });
Account.belongsTo(bill, { foreignKey: 'id_account', sourceKey: 'id_account' });

module.exports = Bill;