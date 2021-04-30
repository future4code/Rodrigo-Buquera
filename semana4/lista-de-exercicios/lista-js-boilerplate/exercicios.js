//Exercício 1

function inverteArray(array) {
   const novoArray = []
   array.forEach((element, i, arr) => {
      element = arr[arr.length - 1 - i]
      novoArray.push(element)
   });
   return novoArray
}

//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   const arrayParesElevados = []
   array.forEach((element) => {
      if (element % 2 === 0) {
         arrayParesElevados.push(element * element)
      }
   })
   return arrayParesElevados
}

//Exercício 3

function retornaNumerosPares(array) {
   const arrayPares = array.filter((element) => {
      if (element % 2 === 0) {
         return true
      }
   })
   return arrayPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNum = 0
   array.forEach((num) => {
      if (num > maiorNum) {
         maiorNum = num
      }
   })
   return maiorNum
}

//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2
   const booleano4 = !booleano3

   const arrayBooleano = []

   arrayBooleano.push(booleano1 && booleano2 && !booleano4)
   arrayBooleano.push((booleano1 && booleano2) || !booleano3)
   arrayBooleano.push((booleano2 || booleano3) && (booleano4 || booleano1))
   arrayBooleano.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))
   arrayBooleano.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))

   return arrayBooleano
}

//Exercício 7

function retornaNNumerosPares(n) {


}

// Exercício 8

function checaTriangulo(a, b, c) {
   if (a === b && b === c) {
      return "Equilátero"
   }
   if (a !== b && b !== c) {
      return "Escaleno"
   }
   if ((a === b && b !== c) || (a === b && b !== c))
      return "Isósceles"
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   const objeto = {
      maiorNumero: 0,
      maiorDivisivelporMenor: 0,
      diferenca: 0
   }

   if (num1 > num2) {
      objeto.maiorNumero = num1
      objeto.diferenca = num1 - num2
   } else {
      objeto.maiorNumero = num2
      objeto.diferenca = num2 - num1
   }

   if (num1 % num2 === 0) {
      objeto.maiorDivisivelporMenor = false
   } else {
      objeto.maiorDivisivelporMenor = true
   }
   return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // let primeiroMaior = 0
   // let segundoMaior = 0
   // let primeiroMenor = 0
   // let segundoMenor = 0
   // let novoArray = []
  
   let n = array.sort((a,b) => a-b)   

console.log(n)


   // novoArray = array.forEach((elemento) => {
   //    if (elemento > primeiroMaior) {
   //       primeiroMaior = elemento
   //       if (segundoMaior > elemento && segundoMaior < primeiroMaior)
   //          segundoMaior = elemento

   //    } else {
   //       primeiroMenor = elemento
   //       if (segundoMenor < elemento && segundoMenor > primeiroMenor)
   //          segundoMenor = elemento
   //    }

   //    novoArray.push(segundoMaior)
   //    novoArray.push(segundoMenor)

   // })
   
   // return novoArray

}

//Exercício 11

function ordenaArray(array) {
   let arrayCrescente = array.sort((a,b) => a-b)  
   return arrayCrescente
}

// Exercício 12

function filmeFavorito() {
   filmeAstrodev = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
   return filmeAstrodev
}

// Exercício 13

function imprimeChamada() {
   filmeAstrodev = {
      nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
   }

   return `Venha assistir ao filme ${filmeAstrodev.nome}, de ${filmeAstrodev.ano}, dirigido por ${filmeAstrodev.diretor} e estrelado por ${filmeAstrodev.atores}.`

}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   retangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado2 + lado1),
      area: lado1 * lado2
   }
   return retangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoa.nome = "ANÔNIMO"
   return pessoa
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const arrayMaiores18 = arrayDePessoas.filter((element) => {
      if (element.idade >= 20) {
         return true
      }
   })
   return arrayMaiores18
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const arrayMenores18 = arrayDePessoas.filter((element) => {
      if (element.idade < 20) {
         return true
      }
   })
   return arrayMenores18
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const arrayX2 = []

   array.forEach((element) => {
      arrayX2.push(element * 2)

   });
   return arrayX2
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const arrayX2String = []

   array.forEach((element) => {
      arrayX2String.push(String(element * 2))

   });
   return arrayX2String
// está com um erro no enunciado. Ao invés de 3 o teste está por 2.
}

// Exercício 17, letra C

function verificaParidade(array) {
   const arrayEParidade =[]

   array.forEach((element) => {
      if (element%2===0) {
         arrayEParidade.push(`${element} é par`)
      } else {
         arrayEParidade.push(`${element} é ímpar`)
      }      
   })
   return arrayEParidade
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
  const pessoasAutorizadas =  pessoas.filter((pessoas) =>{
      if (pessoas.altura>1.5 && pessoas.idade>14 && pessoas.idade<60)
      return true
  })
  return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const pessoasNaoAutorizadas =  pessoas.filter((pessoas) =>{
      if (pessoas.altura<1.5 || pessoas.idade<14 || pessoas.idade>60)
      return true
  })
  return pessoasNaoAutorizadas
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

//Exercício 19, letra A

function ordenaPorNome() {
   let consultasOrdenadas =[]

   consultasOrdenadas = consultasNome.sort()
   console.log(consultasOrdenadas)

}

// Exercício 19, letra B

const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia", dataDaConsulta: "04/05/2021" }
]

function ordenaPorData() {

}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   contas.forEach((clientes) => {
         gastosCliente = 0
         clientes.compras.forEach((valor) => {
          gastosCliente = gastosCliente + valor  
         })
      clientes.saldoTotal -= gastosCliente      
   })
   return contas
}