class Aluno {
    constructor(name, status, online) {
        this.id = this.generateID();
        this.name = name;
        this.status = status;
        this.online = online;
    }
    generateID() {
        return Math.floor(Math.random() * 999) + 1;
    }
}

export default User;