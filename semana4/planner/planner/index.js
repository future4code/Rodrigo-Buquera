// const diasAgenda = ["domingo","segunda","terca","quarta", "quinta", "sexta", "sabado"]

// for (dia of diasAgenda){
//     for (let num=0; num <24; num++){
//         horarioAgenda = document.getElementById(`${dia}`)
//         horarioAgenda.innerHTML += `<ul  class="${num}, estilo-hora"> ${num}h </ul>`
//     }
// }
// não deu tempo de finalizar o desafio 4

function adicionarTarefa() {

    const diasSemana = document.getElementById("dias-semana")
    const tarefa = document.getElementById("tarefa")
    const tarefaDia = document.getElementById(`${diasSemana.value}`)
    
    if (tarefa.value !== "") {        
        tarefaDia.innerHTML += `<ul onclick="clicar(this)"> ${tarefa.value} </ul>`        
    } else {
        alert("É necessário entrar com um tarefa")
    }
}

function clicar(elemento){  
elemento.style = "text-decoration: line-through"
}

function limparTarefas(){
    const limpeza = document.getElementsByTagName("ul")
    for (i of limpeza){
        i.innerHTML =""
    }
    
} 

