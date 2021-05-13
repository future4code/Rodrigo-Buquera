import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const ContainerMensagem = styled.div`
  display: flex;
  justify-content: space-between;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "texto da tarefa",
        completa: false
      },
      {
        id: Date.now(),
        texto: "mais uma tarefa",
        completa: true
      },
    ],
    inputValue: '',
    filtro: '',
    edicao: false
  }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"))
    this.setState({ tarefas: tarefasSalvas })
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaListaTarefas = [...this.state.tarefas, {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }]
    this.setState({ tarefas: novaListaTarefas, inputValue: "" })
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  apagaTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })
    this.setState({ tarefas: novaListaTarefas })
  }

  apagaTudo = () => {
    this.setState({ tarefas: [] })
  }

  editaMensagem = () => {
    this.setState({ edicao: !this.state.edicao })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    }).sort((a, b) => {
      return a.completa - b.completa
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.apagaTudo}>Apagar mensagens</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (

              <ContainerMensagem >
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                  onDoubleClick={() => this.apagaTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={this.editaMensagem}> edite</button>
                {
                this.state.edicao && 
                <div>
                  <input placeholder="edite aqui" />
                  <button >Enviar</button>
                </div>
                }
              </ContainerMensagem >
            )
          })
          }
        </TarefaList>
      </div>
    )
  }
}

export default App
