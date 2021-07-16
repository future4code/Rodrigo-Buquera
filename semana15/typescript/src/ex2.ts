// a 
// entrada: array de números / saída: objeto estatisticas


function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number, menor:number, media:number } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// b
// a e b são numeros que estão dentro do array, a soma é um número e estatistica é umm objeto onde cada propriedade diferente também é um número.

//c

type  amostra ={
    numeros: number[]
    obterEstatisticas:  (numeros:number[]) => void
}

const amostraDeIdades:amostra = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros) => {}
}