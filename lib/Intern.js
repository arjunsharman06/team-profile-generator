class Engineer{
    
    constructor(name, id,email,school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    // Get Name
    getName(){
       return this.name;
    }

    // Get Id
    getId(){
        return this.id;
    }

    // Get Email 
    getEmail(){
        return this.email;
    }

    // Get School
    getSchool(){
        return this.school;
    } 

    // Get Role()
    getRole(){
        return Engineer;
    }

}

module.exports = Engineer;