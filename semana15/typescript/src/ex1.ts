//a
const minhaString:string = "teste"
//b
const meuNumero: number = 0
const meuNumeroString: number|string = "teste"
//c

const rodrigo:{
    nome: string
    idade: number
    corFavorita: string
} = {
    nome: "rodrigo",
    idade: 32,
    corFavorita: "laranja"
}

type pessoa={
    nome: string
    idade: number
    corFavorita: string
}

const lou: pessoa={
   nome: "louize",
   idade: 31,
   corFavorita: "azul"
}

const thi: pessoa={
    nome: "thiago",
    idade: 36,
    corFavorita: "azul"
 }

 const maria: pessoa={
    nome: "maria",
    idade: 18,
    corFavorita: "verde"
 }

 //d
 enum cores{
     AZUL="azul",
     VERDE="verde",
     VERMELHO="vermelho",
     LARANJA="laranja",
     AMARELO="amarelo",
     ANIL="anil",
     VIOLETA="violeta"
 }

 type pessoaCores={
    nome: string
    idade: number
    corFavorita: cores
}

const lala: pessoaCores={
    nome: "lala",
    idade: 18,
    corFavorita: cores.ANIL
 }