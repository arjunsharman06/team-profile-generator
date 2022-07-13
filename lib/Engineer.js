class Engineer{
    
    constructor(name, id,email,github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    // Get Github()
    getGitHub(){
        return this.github;
    } 

    // Get Role()
    getRole(){
        return Engineer;
    }

}

module.exports = Engineer;