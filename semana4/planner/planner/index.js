

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

