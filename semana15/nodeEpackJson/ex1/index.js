// ex1. a
// Para acessar os parametros é necessário usar o comando process.argv (no caso [2], pois os 2 primeiros itens são preenchidos)


// ex1 b e c

const idadeFutura = Number(process.argv[3]) + 7

console.log(` Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${idadeFutura} `)
