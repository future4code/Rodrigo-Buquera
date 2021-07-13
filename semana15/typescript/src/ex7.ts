enum CLASS {
    VERAO = "Verão",
    INVERNO = "Inverno",
    BANHO = "Banho",
    INTIMAS = "Intímas"
}

type roupas = {
    nome: string
    preco: number
    class: CLASS
    precoDesconto?: number
}

const listaRoupas: roupas[] = [
    {
        nome: "cueca",
        preco: 10,
        class: CLASS.INTIMAS
    },
    {
        nome: "blusa",
        preco: 100,
        class: CLASS.INVERNO
    },
    {
        nome: "biquini",
        preco: 50,
        class: CLASS.VERAO
    },
    {
        nome: "toalha",
        preco: 25,
        class: CLASS.BANHO
    },
]

function desconto(lista: roupas[]): void {
    lista.forEach((roupa) => {

        console.log("lista", lista)
        switch (roupa.class) {
            case "Verão":
                roupa.precoDesconto = roupa.preco * 0.95

            case "Inverno":
                roupa.precoDesconto = roupa.preco * 0.90

            case "Banho":
                roupa.precoDesconto = roupa.preco * 0.96

            case "Intímas":
                roupa.precoDesconto = roupa.preco * 0.93

            default:
                console.log("deu ruim")
                break;
        }

    })

    console.log("resultado", lista)
}

desconto(listaRoupas)