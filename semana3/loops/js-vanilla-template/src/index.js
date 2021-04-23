
//                    ATIVIDADE OPERADORES   - 20/04     


// Interpretação 
// 1.

// a. false
// b. false
// c. true
// d. boolean

2.

// a. undefined 
// b. null
// c. 11
// d. 3
// e. 3, 19 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13


// Escrita
// 1.

// let idade = prompt("qual a sua idade")
// let idadeAmigo = prompt("qual a idade do seu melhor amigo?")

// Number(idade)
// Number(idadeAmigo)

// console.log("Sua idade é amior que a do seu melhor amigo? ", idade>=idadeAmigo) 

// console.log (idade - idadeAmigo)

// 2.

// let numero = prompt("digite um numero par")

// Number(numero)

// console.log(numero%2) 

// o resto da divisão de números pares é sempre 1, enquanto de números impares é sempre 1"

// 3.

// let listaDeTarefas = []

// listaDeTarefas[0]  = prompt("Qual a sua primeira tarefa do dia?")
// listaDeTarefas[1]  = prompt("Qual a sua segunda tarefa do dia?")
// listaDeTarefas[2]  = prompt("Qual a sua terceira tarefa do dia?")

// // console.log(listaDeTarefas)

// let indice = prompt("qual dessas tarefas você já fez? de 0 a 2")
// Number(indice)

// let removido
// removido = listaDeTarefas.splice(indice,1)

// console.log(listaDeTarefas)

// 4.

// let nomeDoUsuario = prompt("qual seu nome?")
// let emailDoUsuario = prompt("qual seu email?")

// console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}`)

// Desafios

// 1.

// let grauCelsius
// let kelvin
// let grauFahrenheit

//a
// grauFahrenheit = 77

//b
// grauCelsius = 80

//c
// grauCelsius = 30

//d
// grauCelsius = prompt("insira a temperatura em Celsius")
// Number(grauCelsius)

// grauFahrenheit = grauCelsius*9/5 +32
// kelvin = (grauFahrenheit -32)*5/9 +273.15

// //a
// // console.log(kelvin +"K")

// //b
// // console.log(grauFahrenheit +"°F")

// //c
// // console.log(grauFahrenheit +"°F")
// // console.log(kelvin +"K")

// //d
// console.log(grauFahrenheit +"°F")
// console.log(kelvin +"K")


// 2.

// const custoQwh =  0.05
// let consumo = prompt("qual seu consumo em QWH?")
// Number(consumo)

// console.log("Você deve pagar R$", consumo*custoQwh)

// console.log("Com desconto você deve pagar R$", consumo*custoQwh*0.85)

// 3.
//a.

// let pesoLibra = 20
// let pesoQuilo=pesoLibra/2.4046

// console.log(`20lb equivalem a ${pesoQuilo} kg`)

//b
// let pesoOnca= 10.5
// let pesoQuilo=pesoOnca/35.274

// console.log(`20lb equivalem a ${pesoQuilo} kg`)

//c.
// let milhas=100
// let metros=milhas/0.00062137

// console.log(`100mi equivalem a ${metros} m`)

//d.
// let pes=50
// let metros=pes/3.2808

// console.log(`50ft equivalem a ${metros} m`)

//e.
// let galao=103.56
// let litros=galao/0.26417

// console.log(`103.56gal equivalem a ${litros} l`)

//f.
// let xicaras=450
// let litros=xicaras*6/25

// console.log(`450 xic equivalem a ${litros} l`)

//g.

// let pesoLibra = prompt("entre com um peso em libra")
// Number(pesoLibra)
// let pesoQuilo=pesoLibra/2.4046

// console.log(`100lb equivalem a ${pesoQuilo} kg`)



//                    ATIVIDADE CONDICIONAIS   - 22/04


// INTERPRETAÇÃO

// 1. 
//Ele testa se os números são pares ou impares. O número passa no teste quanto é par e não passa quanto é impar.

// 2. 
//a. Ele serve pra que dependendo do tipo de fruta o código atribua um preço diferente e imprima o valor dentro da mensagem.
//b. O preço da fruta Maçã é R$ 2.25
//c. O preço da fruta Perâ é R$ 5

//3.
//a. Está criando um variavél de valor constante de nome "numero" cujo valor será atribuido pelo usuario e já transformado de um string para um number.
//b. Com valor 10 a mensagem seria "esse número passou no teste". Com valor -10 não apareceria nada. 
//c. Sim, pois independente do valor do número, a variavel "mensagem" é definida dentro do escopo do função if, por isso, fora deste escopo ela não será encontrada.


// ESCRITA

//4.

// let idade = Number(prompt("qual a sua idade?"))

// if (idade >= 18){
//     console.log("você pode dirigir")
// } else  {
//     console.log("você não pode dirigir")
// }

// 5.

// let periodo = prompt("Você estuda no: M (matutino) ou V (Vespertino) ou N (Noturno)?").toLocaleUpperCase()

// if (periodo === "M") {
//     console.log("Bom dia")
// } else if (periodo === "V") {
//     console.log("Boa tarde") 
// } else if (periodo === "N") {
//     console.log("Boa noite") 
// } else {
//     console.log("Por favor, entrar com um valor válido: M, V ou N")
// }

// 6.

// let periodo = prompt("Você estuda no: M (matutino) ou V (Vespertino) ou N (Noturno)?").toLocaleUpperCase()

// switch (periodo){
//     case "M":
//         console.log("Bom dia")
//         break
//     case "V":
//         console.log("Boa tarde")
//         break
//     case "N":
//         console.log("Boa noite")
//         break
//     default:
//         console.log("Por favor, entrar com um valor válido: M, V ou N")
// }

// 7.

// let genero = prompt("qual o gênero do filme que você vai assistir?").toLocaleLowerCase().trim()
// let preco   = Number(prompt("qual o preço do ingresso?"))

// if ( genero==="fantasia" && preco<=15 ) {
//     console.log ("Bom filme")
// } else {
//     console.log("escolha outro filme")
// }

// DESAFIOS

//1. 
// let genero = prompt("qual o gênero do filme que você vai assistir?").toLocaleLowerCase().trim()
// let preco   = Number(prompt("qual o preço do ingresso?"))

// if ( genero==="fantasia" && preco<=15 ) {
//     console.log ("Bom filme")
//     let snack = prompt("Qual snack você ai querer?")
//     console.log("...com " + snack)
// } else {
//     console.log("escolha outro filme")
// }

//2. ingressos de futebol

// let nome = prompt("qual o seu nome completo?")
// let tipoJogo = prompt("qual tipo de jogo: IN  (internacional) e DO (doméstico)?").toUpperCase()
// let etapaJogo = prompt("qual etapa do jogo: SF (semi-final); DT (decisão de terceiro lugar) ou FI (final)?").toUpperCase()
// let categoriaIngresso = prompt("qual a categoria do ingresso: 1, 2,3 ou 4")
// let quantidadeIngresso = Number(prompt("quantos ingressos você quer?"))
// let valorIngresso
// let valorTotal 


// // MENSAGENS DE ERROS

// if (tipoJogo !== "IN" && tipoJogo !== "DO") {
//     console.log("entre com o tipo correto de jogo")
// } else if (etapaJogo !== "SF" && etapaJogo !== "DT" && etapaJogo !== "FI") {
//     console.log("entre com a etapa correta do jogo")
// } else if (categoriaIngresso !== "1" && categoriaIngresso !== "2" && categoriaIngresso !== "3" && categoriaIngresso !== "4") {
//     console.log("entre com a categoria de ingresso correta")
// } else if (isNaN(quantidadeIngresso)) {
//     console.log("entre com um valor númerico correto na quantidade de ingressos")
// } else {

//     // TABELA DE PREÇOS

//     if (etapaJogo === "SF") {
//         switch (categoriaIngresso) {
//             case "1":
//                 valorIngresso = 1320
//                 break
//             case "2":
//                 valorIngresso = 880
//                 break
//             case "3":
//                 valorIngresso = 550
//                 break
//             case "4":
//                 valorIngresso = 220
//                 break
//             default:
//                 console.log("erro na tabela de preços")
//         }
//     } else if (etapaJogo === "DT") {
//         switch (categoriaIngresso) {
//             case "1":
//                 valorIngresso = 660
//                 break
//             case "2":
//                 valorIngresso = 440
//                 break
//             case "3":
//                 valorIngresso = 330
//                 break
//             case "4":
//                 valorIngresso = 170
//                 break
//             default:
//                 console.log("erro na tabela de preços")
//         }
//     } else if (etapaJogo === "FI") {
//         switch (categoriaIngresso) {
//             case "1":
//                 valorIngresso = 1980
//                 break
//             case "2":
//                 valorIngresso = 1320
//                 break
//             case "3":
//                 valorIngresso = 880
//                 break
//             case "4":
//                 valorIngresso = 330
//                 break
//             default:
//                 console.log("erro na tabela de preços")
//         }
//     }

//     //  QUANTIDADE E MOEDA

//     if (tipoJogo === "IN") {
//         valorIngresso = valorIngresso / 4.1
//     }
//     valorTotal = valorIngresso * quantidadeIngresso

//     // MENSAGEM FINAL

//     console.log("---Dados da compra---")
//     console.log(`Nome do cliente: ${nome} `)

//     if (tipoJogo === "IN") {
//         console.log(`tipo do jogo: Internacional `)    
//     } else {
//         console.log(`tipo do jogo: Nacional `)
//     }   

//     if (tipoJogo === "SF") {
//         console.log(`Etapa do jogo: Semifinais  `)    
//     } else if (tipoJogo === "DT"){
//         console.log(`Etapa do jogo: Decisão do 3 lugar`)
//     } else (tipoJogo === "FI")
//     console.log(`Etapa do jogo: Final`)
//     console.log(`Categoria: ${categoriaIngresso} `)
//     console.log(`Quantidade de ingressos: ${quantidadeIngresso}`)
//     console.log(`---Valores---`)

//     if (tipoJogo === "IN") {
//         console.log(`Valor do ingresso: US ${valorIngresso}`)
//         console.log(`Valor total: US ${valorTotal}`)
//     } else {
//         console.log(`Valor do ingresso: R$ ${valorIngresso}`)
//         console.log(`Valor total: R$ ${valorTotal}`)
//     }
// }



//                        AULA 13 - 23/04  - LAÇOS/LOOPS


//INTERPRETAÇÃO

//1. 
// 10

//2.

//a. 
//  19
//  21
//  23
//  25
//  27
//  30

//b. Acredito que o for of não seja a melhor opção, o for definindo um indice i acredito que seja mais fácil (mas não acho que seja impossivel)

// Desafio

// 0
// 00
// 000
// 0000


// ESCRITA

//3.
// const arrayOriginal = [10, 50, 14, 8, 21]

//a.
// for (valores of arrayOriginal){
//         console.log (valores)
// }

//b.
// for (valores of arrayOriginal) {
//     console.log(valores/10)
// }

//c.
// let valoresPares = []
// for (valores of arrayOriginal) {
//     if (valores%2===0){
//         valoresPares.push(valores)
//     }    
//     }
// console.log(valoresPares)

//d.
// for (let i =0; i<arrayOriginal.length; i++){
//         console.log(`o elemento do index ${i} é: ${arrayOriginal[i]} `)
// }

//e.
// let maiorValor = 0
// let menorValor = Infinity

// for (valores of arrayOriginal){    
//     if (valores>maiorValor) {
//         maiorValor = valores
//     }
//     if (valores<menorValor) {
//         menorValor = valores
//     }
// }
// console.log(`O maior valor è: ${maiorValor}`)
// console.log(`O menor valor è: ${menorValor}`)

// DESAFIOS

// 1.

// let numero = Number(prompt("vamos jogar"))
// let contagem =1

// while (numero !== 30){
//     console.log(`O numero chutado foi ${numero}`)
//         if (numero>30){
//             console.log(" Errrrrou o numero é menor")
//             numero = Number(prompt("tente de novo"))
//             contagem++
//         } else{
//             console.log(" Errrrrou o numero é maior")
//             contagem++
//             numero = Number(prompt("tente de novo"))
//         }
// }
// console.log("Acertou")
// console.log(`o numero de tentativas foi: ${contagem}`)

// 2.


let contagem = 1
let numero = Number(prompt("vamos jogar"))
let numeroAleatorio = Math.floor((Math.random() * 100) + 1);

while (numero !== numeroAleatorio) {
    console.log(`O numero chutado foi ${numero}`)
    numero = Number(prompt("tente de novo"))   
    contagem++
    if (numero > numeroAleatorio) {
        console.log(" Errrrrou o numero é menor")
    } else {
        console.log(" Errrrrou o numero é maior")
    }
}
console.log("Acertou")
console.log(`o numero de tentativas foi: ${contagem}`)

// Não to dando certo, o programa esta lendo o console.log como uma variavel e não estou conseguindo acomparnh
