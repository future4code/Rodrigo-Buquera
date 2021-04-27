//                                              interpretação

//1.  
// a.
// 10
// 50 
// b.
// Não aparecia nada no console e os valores não seriam armazenados em lugar nenhum

// 2.
// a.
// Darvas
// Caio
//b.
// Amanda
// Caio

//3.
// A função irá verificar quais valores são pares dentro o array e armazenara no arrayFinal o dobro dos valores pares. Sugestão de nome: dobrarPares

//                                                  Escrita

// 4. 
// a.
// function dadosGerais() {
//     console.log("Olá, sou Rodrigo, tenho 31 anos, vivo em Sorocaba/SP e sou engenheiro ambiental")    
// }

// dadosGerais()

//b.

// const nome = prompt("qual seu nome?")
// const idade = Number(prompt("qual sua idade?"))
// const cidade = prompt("qual sua cidade?")
// const estudante = prompt("você é um estudante?")

// function dadosGerais(nome, idade, cidade, estudante) {
//     console.log(`Olá, sou ${nome}, tenho ${idade} anos, vivo em ${cidade} e ${estudante} estudante`)    
// }

// dadosGerais(nome, idade, cidade, estudante)

// 5.
//a.
// function somar(num1, num2) {
//     let soma = num1 + num2
//     console.log(soma)   
// }

// somar(10, 34)

// b.
// let resultado = Boolean
// function compararNumeros(num1, num2) {
//     if (num1>= num2) {
//         resultado = true
//     } else {
//         resultado = false
//     }
//     console.log(resultado)    
// }

// compararNumeros(500, 100)

//c.
    // const mensagem = prompt("entre com uma mensagem")
    // function repetirMensagem() {
    //     for (let i=0; i<10; i++) {
    //         console.log(mensagem)
    //     }       
    // }
    // repetirMensagem()

//6.
// const arrayExemplo = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22] 

//a.
// function contarItens(array) {
//     console.log(`o array tem ${array.length}`)
// }

// contarItens(array)

//b. 
// function conferirParidade(numero) {
//     if (numero%2 == 0){
//         resultado = true
//     } else {
//         resultado = false
//     }
//     return resultado
    // console.log (`o número é par?: ${resultado}`)
// }
// conferirParidade(200)

// c.
// let contagem =0

// function contarPares(array) {
//     for ( let i=0; i<array.length; i++){
//             if (array[i]%2==0){
//                 contagem++
//             }                
//     }
// return contagem   
// }

// contarPares(arrayExemplo)
// console.log("o total de números pares é", contagem)

//d.

// const arrayExemplo = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let contagemPares = 0

// function conferirParidade(numero) {
//     if (numero % 2 == 0) {
//         resultado = true
//     } else {
//         resultado = false
//     }
//     return resultado
// }

// function contarPares(array) {
//     for (let i = 0; i < array.length; i++) {
//         conferirParidade(array[i])
//         if (conferirParidade(array[i]) === true) {
//             contagemPares++
//         }
//     }
//     return contagemPares
// }

// console.log(contarPares(arrayExemplo))

//                                             Desafios

//1.  

//1
// const arrowFunction = (parametro) => {
//        console.log(parametro)
// } 

// // arrowFunction(5)

// //2 

// const arrowFunction2 = (num1, num2) => {
//         soma = num1 +num2 
//         arrowFunction(soma)
        
// }

// arrowFunction2(10, 5)


//2.

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]


//a.
// let arrayPares =[]

// function dobrarPares(array) {
//     for (let i=0; i<array.length; i++){
//         if (array[i]%2==0)
//             arrayPares.push(array[i]*2)
//     }
//     console.log(arrayPares)
// }

// dobrarPares(numeros)

//b.
// let maiorNumero = 0

// function retornarMaior (array) {
//     for (let numero of array){
//         if (numero > maiorNumero){
//             maiorNumero = numero
//         }    
// }
// return maiorNumero
// }

// console.log(retornarMaior(numeros))

// c.
// let maiorIndice = 0
// let maiorNumero = 0

// function retornarMaior (array) {
//     for (let i=0; i<array.length; i++){
//         if ( array[i] > maiorNumero){
//             maiorNumero = array[i]
//             maiorIndice = i
//         }    
// }
// return maiorIndice
// }

// console.log(retornarMaior(numeros))

//d. 

// let i = numeros.length-1
// let arrayInvertido = []

// function inverterArray(array) {
//         while ( i>-1){
//             arrayInvertido.push(array[i])
//             i = i - 1
//         }
//     console.log(arrayInvertido)
// }

// inverterArray(numeros)