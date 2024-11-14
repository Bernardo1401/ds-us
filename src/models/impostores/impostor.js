class Impostor {
    constructor(sabotagem, habilidadeEspecial) {
        this.id = this.generateID();
        this.sabotagem = sabotagem;
        this.hahabilidadeEspecial =habilidadeEspecial;
    }
    generateID() {
        return Math.floor(Math.random() * 999) + 1;
    }
}