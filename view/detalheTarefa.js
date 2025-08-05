import TarefaController from "../controller/tarefaController.js";

const tarefaController = new TarefaController();

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const tarefa = tarefaController.buscarTarefa(id);

if (tarefa) {
  document.getElementById("titulo").innerText = tarefa.titulo;
} else {
  document.getElementById("titulo").innerText = "Tarefa não encontrada";
}

var comentarioHtml = `
<div>
  <div>
    <div>
      <p><strong>Usuário 1:</strong> Este é um comentário.</p>
      <span>01/01/2025 12:00</span>
    </div>
    <div>
      <p>
        <strong>Usuário 2:</strong> Outro comentário interessante.
      </p>
      <span>01/01/2025 12:30</span>
    </div>
  </div>
  <form>
    <textarea
      id="comment"
      placeholder="Escreva um comentário..."
      required
    ></textarea>
    <button type="submit">Enviar</button>
  </form>
</div>
`;
var historicoHtml = `
<div>
  <p><strong>Usuário 1:</strong> Enviou um comentário.</p>
  <span>01/01/2025 12:00</span>
</div>
<div>
  <p><strong>Usuário 2:</strong> Enviou um comentário.</p>
  <span>01/01/2025 12:30</span>
</div>
`;

var divisionCmHt = document.getElementById("comentario-historico");
divisionCmHt.innerHTML = comentarioHtml;

var btnComentarios = document.getElementById("btn-comentarios");
var btnHistorico = document.getElementById("btn-historico");

btnComentarios.addEventListener("click", () => {
  divisionCmHt.innerHTML = comentarioHtml;
});
btnHistorico.addEventListener("click", () => {
  divisionCmHt.innerHTML = historicoHtml;
});
