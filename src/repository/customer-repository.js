const Customer = require("../database/model/customer");

module.exports = {
    findAll: async () => {
        return await Customer.findAll()
    }
}