let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTeste: string = 'verificar';
stringTeste = anyEstaDeVolta;

///////////////////////////////////////

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'teste2';
unknownValor = true;
unknownValor = 'vai sim';

let stringTeste2: string = 'Agora vai';


if(typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never {
    throw{error: erro, code: codigo}
}

jogaErro('Deu erro', 500);