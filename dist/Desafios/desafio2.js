"use strict";
// Como podemos melhorar o esse código usando TS?
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
const Maria = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz
};
const Roberto = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
const Laura = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz
};
const Carlos = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
