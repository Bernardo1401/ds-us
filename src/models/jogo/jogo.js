class jogo {
    constructor(alunos, salas, numerosTripulantes, numerosImpostores, rodadaAtiva) {
        this.id = this.generateID();
        this.alunos = alunos;
        this.salas = salas;
        this.numerosTripulantes = numerosTripulantes;
        this.numerosImpostores = numerosImpostores;
        this.rodadaAtiva = rodadaAtiva;
    }
    generateID() {
        return Math.floor(Math.random() * 999) + 1;
    }
}