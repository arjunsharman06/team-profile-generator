const Empolyee = require('../lib/Employee');
class Engineer extends Empolyee{

    constructor(name, id, email, github) {
        super(name,id,email);
        this.github = github;
    }

    // Get Github()
    getGitHub() {
        return this.github;
    }

    // Get Role()
    getRole() {
        return Engineer;
    }

}

module.exports = Engineer;