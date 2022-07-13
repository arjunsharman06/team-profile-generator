class Empolyee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Name
    getName(){
        return this.name;
    }

    // Id
    getId(){
        return this.id;        
    }

    // Email
    getEmail(){
        return this.email;
    }

    //Role
    getRole(){
        return Empolyee;
    }
}

module.exports = Empolyee;