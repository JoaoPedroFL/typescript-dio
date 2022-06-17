// Como podemos melhorar o esse código usando TS?

enum Profissao {
    Atriz,
    Padeiro
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const Maria: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
}

const Roberto: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

const Laura: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};

const Carlos: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}