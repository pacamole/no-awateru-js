// no-awateru-js-main/view/main.js
import TarefaController from "../controller/tarefaController.js";

const tarefaController = new TarefaController();

const taskForm = document.getElementById("task-form");
const tituloInput = document.getElementById("titulo");
const descricaoInput = document.getElementById("descricao");
const statusSelect = document.getElementById("status");

const pendenteList = document.querySelector(
  '.kanban-column[data-status="pendente"] .task-list'
);
const emAndamentoList = document.querySelector(
  '.kanban-column[data-status="em-andamento"] .task-list'
);
const concluidoList = document.querySelector(
  '.kanban-column[data-status="concluido"] .task-list'
);

function renderizarTarefas() {
  pendenteList.innerHTML = "";
  emAndamentoList.innerHTML = "";
  concluidoList.innerHTML = "";

  const tarefas = tarefaController.listarTarefas();

  tarefas.forEach((tarefa) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
      <h4>${tarefa.titulo}</h4>
      <p>${tarefa.descricao}</p>
      <p>ID: ${tarefa.id}</p>
      <span class="status-label">${
        tarefa.status
      ? tarefa.status.charAt(0).toUpperCase() + tarefa.status.slice(1)
      : "Sem status"
      }</span>
    `;

    switch (tarefa.status) {
      case "pendente":
        pendenteList.appendChild(taskElement);
        break;
      case "em-andamento":
        emAndamentoList.appendChild(taskElement);
        break;
      case "concluido":
        concluidoList.appendChild(taskElement);
        break;
    }
  });
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulo = tituloInput.value;
  const descricao = descricaoInput.value;
  const status = statusSelect.value;

  const idUsuarioCriador = 1;
  const idUsuariosAtribuidos = [];
  const dataLimite = Date.now() + 7 * 24 * 60 * 60 * 1000;

  try {
    tarefaController.adicionarTarefa(
      idUsuarioCriador,
      titulo,
      descricao,
      idUsuariosAtribuidos,
      status,
      dataLimite
    );
    console.log(
      "Tarefa adicionada com sucesso!",
      tarefaController.listarTarefas()
    );
    taskForm.reset();
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error.message);
    alert("Erro ao adicionar tarefa: " + error.message);
  }

  try {
    renderizarTarefas();
  } catch (error) {
    console.error("Erro ao renderizar tarefas:", error.message);
    alert("Erro ao renderizar tarefas: " + error.message);
  }
});

document.addEventListener("DOMContentLoaded", renderizarTarefas);
