const customerRep = require('../repository/customer-repository');
const CustomerDto = require('../dto/customer-dto');

const getCustomer = async (req, res) => {
    const Customers = [];
    try {
        await customerRep.findAll().then(res => {
            if (res) {
                res.forEach((cus) => {
                    //console.log(cus.dataValues);
                    Customers.push(CustomerDto.getfromModel(cus));
                })
            }
        }).catch(err => {
            console.log(err);
        });
        res.status(200).json(Customers);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getCustomer
}