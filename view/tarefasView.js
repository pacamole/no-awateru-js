import TarefaController from "../controller/tarefaController.js";
import Tarefa from "../module/tarefa.js";

class TarefasView {
  constructor(tarefaController, pendenteList, emAndamentoList, concluidoList) {
    this._tarefaController = tarefaController;
    this._pendenteList = pendenteList;
    this._emAndamentoList = emAndamentoList;
    this._concluidoList = concluidoList;

    this._configurar();
  }

  renderizarTarefas() {
    this._pendenteList.innerHTML = "";
    this._emAndamentoList.innerHTML = "";
    this._concluidoList.innerHTML = "";

    var tarefas = this._tarefaController.listarTarefas();

    if (tarefas) {
      tarefas.forEach((tarefa) => {
        const taskElement = document.createElement("div");

        // Direciona para Detalhes da Tarefa
        taskElement.addEventListener("click", () => {
          window.location.href = `./view/detalheTarefaView.js?id=${tarefa.id}`;
        });

        taskElement.classList.add("task");
        taskElement.innerHTML = `
        <div class="div-row">
        <h4>${tarefa.titulo}</h4>
        <div id="task-date">
        <small>Criação:</small>
        <small>${new Date(tarefa.dataCriacao).toLocaleDateString()}</small>
        </div>
        </div>
        <p>${tarefa.descricao}</p>      
        
        <div class="div-row">
          <span class="status-label">${
            tarefa.status
              ? tarefa.status.charAt(0).toUpperCase() + tarefa.status.slice(1)
              : "Sem status"
          }</span>
  
          <div id="task-date">
          <small>Limite:</small>
          <small>${new Date(tarefa.dataLimite).toLocaleDateString()}</small>
        </div>
        </div>
      `;

        switch (tarefa.status) {
          case "pendente":
            this._pendenteList.appendChild(taskElement);
            break;
          case "em-andamento":
            this._emAndamentoList.appendChild(taskElement);
            break;
          case "concluido":
            this._concluidoList.appendChild(taskElement);
            break;
        }
      });
    }
  }

  _adicionarTarefa(event) {
    let taskForm = document.getElementById("task-form");
    let tituloInput = document.getElementById("titulo");
    let descricaoInput = document.getElementById("descricao");
    let statusSelect = document.getElementById("status");

    console.log("Formulário enviado");
    event.preventDefault();

    const titulo = tituloInput.value;
    const descricao = descricaoInput.value;
    const status = statusSelect.value;
    const idUsuarioCriador = 1;

    var tarefa = Object.assign(new Tarefa(), {
      _idUsuario: idUsuarioCriador,
      _titulo: titulo,
      _descricao: descricao,
      _status: status,
      _dataCriacao: Date.now(),
      _dataLimite: Date.now() + 7 * 24 * 60 * 60 * 1000,
    });

    try {
      this._tarefaController.adicionarTarefa(tarefa);
      console.log(
        "Tarefa adicionada com sucesso!",
        this._tarefaController.listarTarefas()
      );
      taskForm.reset();
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error.message);
      alert("Erro ao adicionar tarefa: " + error.message);
    }

    try {
      this.renderizarTarefas();
    } catch (error) {
      console.error("Erro ao renderizar tarefas:", error.message);
      alert("Erro ao renderizar tarefas: " + error.message);
    }
  }

  _configurar() {
    document
      .getElementById("task-form")
      .addEventListener("submit", this._adicionarTarefa.bind(this));

    document.addEventListener(
      "DOMContentLoaded",
      this.renderizarTarefas.bind(this)
    );
  }
}

let pendenteList = document.querySelector(
  '.kanban-column[data-status="pendente"] .task-list'
);
let emAndamentoList = document.querySelector(
  '.kanban-column[data-status="em-andamento"] .task-list'
);
let concluidoList = document.querySelector(
  '.kanban-column[data-status="concluido"] .task-list'
);

const tarefaController = new TarefaController();

const tarefasView = new TarefasView(
  tarefaController,
  pendenteList,
  emAndamentoList,
  concluidoList
);
