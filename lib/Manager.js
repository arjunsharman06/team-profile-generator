class Manager {

    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    // Get Name
    getName() {
        return this.name;
    }

    // Get Id
    getId() {
        return this.id;
    }

    // Get Email 
    getEmail() {
        return this.email;
    }

    // Office Number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Get Role()
    getRole() {
        return Manager;
    }

}

module.exports = Manager;