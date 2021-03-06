let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas) {
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO

    despesas.forEach((despesaImpressa) => {
        divDespesas.innerHTML += `<div> Valor:R$ ${despesaImpressa.valor}| tipo: ${despesaImpressa.tipo} | descrição: ${despesaImpressa.descricao} </div>`
    })

    // FIM DA IMPLEMENTAÇÃO
}


// SEGUNDO 
function imprimirExtrato() {
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO

    arrDespesas.forEach((itemDespesa) => {
        if (itemDespesa.tipo === "alimentação") {
            gastoAlimentacao += itemDespesa.valor
        } else if (itemDespesa.tipo === "utilidades") {
            gastoUtilidades += itemDespesa.valor
        } else if (itemDespesa.tipo === "viagem") {
            gastoViagem += itemDespesa.valor
        }
    })

    gastoTotal = gastoUtilidades + gastoViagem + gastoAlimentacao

    // FIM DA IMPLEMANTAÇÃO

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa() {
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if (validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)) {
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)

        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""


        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas() {



    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO

    if (tipoFiltro === "" || valorMin === 0 || valorMax === 0) {
        alert("preencher todos os campos do filtro")
    }
    if (valorMax <= valorMin) {
        alert("valor máximo não pode ser igual o menor que valor mínimo")
    }
    if (valorMin < 0 || valorMax <0){
        alert("não entre com valores negativos")
    }


    let despesasFiltradas = arrDespesas.filter((itemFiltrado) => {


        // if (itemFiltrado.valor >= valorMin && itemFiltrado.valor <= valorMax && itemFiltrado.tipo === tipoFiltro) {
        //     return true
        // }  
        //   ESTA FUNCINANDO

        if (itemFiltrado.tipo === tipoFiltro || tipoFiltro ==="todos" ) {
            if (itemFiltrado.valor >= valorMin && itemFiltrado.valor <= valorMax){
                return true
            }
            
         } 
   
   
    })

    imprimirDespesas(despesasFiltradas)
}







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor) {
    if (valor.value.length > 0 && parseInt(valor.value) > 0) {
        return true
    }
    return false
}

function validarTipo(tipo) {
    if (tipo.value !== "") {
        return true
    }
    return false
}

function validarDescricao(texto) {
    if (texto.value.replace(/ /g, "").length !== 0) {
        return true
    }
    return false
}