type prato = {
    nome: string
    custo: number
    valorVenda: number
    ingredientes: string[]
}

type venda = {
    nomePrato: string
    nomeCliente: string
}

const menu: prato[] = [
    {
        nome: "arroz",
        custo: 10,
        valorVenda: 15,
        ingredientes: ["arroz", "agua", "sal"]
    },
    {
        nome: "vegetais",
        custo: 20,
        valorVenda: 35,
        ingredientes: ["cenoura", "batata", "cebola"]
    },
    {
        nome: "macarrão",
        custo: 30,
        valorVenda: 45,
        ingredientes: ["macarrão", "molho", "agua"]
    }
]

const pratosVendidos: venda[] = [
    {
        nomePrato: "vegetais",
        nomeCliente: "Macros"
    },
    {
        nomePrato: "arroz",
        nomeCliente: "Macros"
    }
]


//a
function adicionarPrato(nome: string, custo: number, valorVenda: number, ingredientes: string[]): void {
    const novoprato = { nome, custo, valorVenda, ingredientes }
    menu.push(novoprato)

    console.log(menu)

}
//b
function buscaPrato(nome: string): void {
    const selecionado: prato[] = menu.filter((item)=> nome === item.nome) 
    console.log("o valor do prato é", selecionado[0].valorVenda)

}

// buscaPrato("vegetais")

//c 

function vendaPrato(nomePrato: string, nomeCliente: string): void {
    const novaVenda = { nomePrato, nomeCliente  }
    pratosVendidos.push(novaVenda)

    console.log(pratosVendidos)

}

// vendaPrato("agua", "min")

// //d 

function calculaLucro(): void {
    const vendas: string[] = pratosVendidos.map((item) => item.nomePrato )



    console.log(vendas)
    // incompleto
}


// calculaLucro()