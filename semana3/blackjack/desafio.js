/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let carta = comprarCarta();
let cartasUsuario = []
let cartasComputador = []
let somaUsuario
let somaComputador
let comprasUsuario = 1
let comprasComputador = 1
let maoUsuario = ""
let maoComputador = ""

console.log("Bem vindo ao jogo de Blackjack")

if (confirm("Quer iniciar uma rodada?")) {
   for (i = 0; i < 2; i++) {
      carta = comprarCarta()
      cartasUsuario.push(carta)
      carta = comprarCarta()
      cartasComputador.push(carta)
   }

   while (cartasUsuario[0].valor === cartasUsuario[1].valor) {
      carta = comprarCarta()
      cartasUsuario[0] = carta
      carta = comprarCarta()
      cartasUsuario[1] = carta
   }

   while (cartasComputador[0].valor === cartasComputador[1].valor) {
      carta = comprarCarta()
      cartasComputador[0] = carta
      carta = comprarCarta()
      cartasComputador[1] = carta
   }

   maoUsuario = cartasUsuario[0].texto + cartasUsuario[1].texto
   maoComputador = cartasComputador[0].texto + cartasComputador[1].texto

   somaUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
   somaComputador = cartasComputador[0].valor + cartasComputador[1].valor

   console.log(`Usuário - cartas ${maoUsuario}  a carta do computador  é ${cartasComputador[0].texto}`)

   while (confirm("deseja comprar outra carta?")) {
      carta = comprarCarta()
      cartasUsuario.push(carta)
      comprasUsuario++
      maoUsuario = maoUsuario + cartasUsuario[comprasUsuario].texto
      somaUsuario = somaUsuario + cartasUsuario[comprasUsuario].valor
      console.log(`Usuário - cartas ${maoUsuario}  a carta do computador  é ${cartasComputador[0].texto}`)
      if (somaUsuario === 21) {
         alert("fim de jogo - você ganhou")
      } else if ((somaUsuario > 21)) {
         alert("fim de jogo - você perdeu")
      }
   }

   if (somaComputador !== somaUsuario || somaComputador < somaUsuario) {
      carta = comprarCarta()
      cartasComputador.push(carta)
      comprasComputador++
      maoComputador = maoComputador + cartasComputador[comprasComputador].texto
      somaComputador = somaComputador + cartasComputador[comprasComputador].valor
      if (somaComputador > 21) {
         console.log(" o Usuario ganhou")
      }

   }

   console.log(`As cartas do usuario são ${maoUsuario}. Sua pontuação foi ${somaUsuario}`)
   console.log(`As cartas do computador são ${maoComputador}. Sua pontuação foi ${somaComputador}`)

   if (somaUsuario <= 21) {
      if (somaComputador === somaUsuario) {
         console.log("empate")
      } else if (somaComputador > somaUsuario) {
         console.log("o computador venceu")
      } else {
         console.log("o usuário venceu")
      }
   }
   
} else {
   console.log("O jogo acabou")
}