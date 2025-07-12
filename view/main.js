import TarefaController from '../controller/tarefaController.js';

const tarefaController = new TarefaController();
const teste = document.getElementById("test");
teste.addEventListener("click", () => {
  alert("Teste de funcionalidade do botão!");
  try {
    tarefaController.adicionarTarefa(
      1,
      "Título da Tarefa",
      "Descrição da Tarefa",
      [2, 3],
      "pendente",
      Date.now() + 86400000
    );
    console.log(
      "Tarefa adicionada com sucesso!\n",
      tarefaController.listarTarefas()
    );
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error);
  }
});