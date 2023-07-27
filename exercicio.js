const alunosESuasMedias = { // objeto // object // json // chave/valor // key/value
    "Fuzeira": 5.9,
    "Gugu": 7,
    "Manell": 10,
    "Tiago": 4,
    "Kaká": 6,
    "Davi": 6.2,
    "Sid": 2.4
};

function verificarSituacaoAluno(media) {
    if (media >= 6) {
        return "aprovado!";
    } else {
        return "reprovado :[";
    }
}

for (let aluno in alunosESuasMedias) {
    console.log("aluno => ", aluno);
    console.log("media => ", alunosESuasMedias[aluno]); // os colchetes estão servindo como o .        
                                                       // ou seja na primeira posição vai ser alunosESuasMedias.Fuzeira
                                                       // na segunda posição vai ser alunosESuasMedias.Gugu
    console.log("O aluno " + aluno + " foi " + verificarSituacaoAluno(alunosESuasMedias[aluno]));

    console.log("==============================================");
}

// ctrl + alt + n  =  para executar