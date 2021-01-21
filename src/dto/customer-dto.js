'use strict';
class CustomerDto {

    constructor(idCustomer, name, address, phone, document) {
        this.idCustomer = idCustomer;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.document = document;
    }


    static getfromModel(model) {
        const dto = new CustomerDto();
        dto.idCustomer = model.dataValues.id_customer;
        dto.name = model.dataValues.name;
        dto.address = model.dataValues.address;
        dto.phone = model.dataValues.phone;
        dto.document = model.dataValues.document;
        return dto;
    }
}

module.exports = CustomerDto;