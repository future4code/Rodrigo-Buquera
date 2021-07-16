// const countries = require("./countries")
// console.log(countries)





// ex1. a
// Para acessar os parametros é necessário usar o comando process.argv (no caso [2], pois os 2 primeiros itens são preenchidos)


// ex1 b e c

// const idadeFutura = Number(process.argv[3]) + 7

// console.log(` Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${idadeFutura} `)


// ex 2
// let num

// const a = Number(process.argv[3])
// const b = Number(process.argv[4])

// switch (process.argv[2]) {
//     case "add":
//         num = a+b
//         break;
//     case "sub":
//         num = a-b
//         break;
//     case "mult":
//         num = a*b
//         break;
//     case "div":
//         num = a/b
        
//         break;

//     default:
//         break;
// }

//  console.log(`Resposta`, num)



// ex3 

const lista = ["comer", "trabalhar", "dormir"]

lista.push(process.argv[2])

console.log(lista)