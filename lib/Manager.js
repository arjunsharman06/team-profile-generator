const Empolyee = require('../lib/Employee');
class Manager extends Empolyee{

    constructor(name, id, email, officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    // Office Number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Get Role()
    getRole() {
        return "Manager";
    }

}

module.exports = Manager;