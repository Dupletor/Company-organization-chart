class Collaborator {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    getName () {
        return this.name;
    }
    getEmail () {
        return this.email;
    }
}

module.exports = Collaborator;