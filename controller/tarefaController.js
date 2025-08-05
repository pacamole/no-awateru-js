import Tarefa from "../module/tarefa.js";

class TarefaController {
  constructor() {
      const tarefasSalvas = localStorage.getItem("tarefas");
      this._tarefas = tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
      console.log("Construído e tarefas salvas")
    }
  
  gerarId() {
    let maiorId = 1;
    if (this._tarefas.length === 0) {
      return 1;
    }

    this._tarefas.forEach(trf => {
      if (trf.id > maiorId) {
        maiorId = trf.id;
      }
    });

    return maiorId + 1;
  }

  adicionarTarefa(
    idUsuarioCriador,
    titulo,
    descricao,
    idUsuariosAtribuidos = [],
    status,
    dataLimite
  ) {
    if (
      typeof idUsuarioCriador == undefined &&
      idUsuarioCriador == null &&
      idUsuarioCriador == 0
    ) {
      throw new Error("O id do usuario criador não pode ser nulo, ou zero.");
    }

    if (titulo == undefined || titulo == null) {
      throw new Error("O título não pode ser nulo ou vazio.");
    }

    if (titulo.length > 30) {
      throw new Error("O título deve ter no máximo 30 caracteres.");
    }

    if (descricao.length > 300) {
      throw new Error("A descrição deve ter no máximo 300 caracteres.");
    }

    let dataCriacao = Date.now();
    if (dataCriacao > dataLimite) {
      throw new Error(
        "A data de criação não pode ser maior que a data limite."
      );
    }

    let tarefa = new Tarefa(
      this.gerarId(),
      idUsuarioCriador,
      titulo,
      descricao,
      idUsuariosAtribuidos,
      status,
      dataCriacao,
      dataLimite
    );
    this._tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(this._tarefas));
  }

  listarTarefas() {
    return this._tarefas;
  }

  buscarTarefa(id) {
    this._tarefas.find((tarefa) => tarefa.id === id);
  }

  removerTarefa(idTarefa) {
    this._tarefas = this._tarefas.filter((t) => t.id !== idTarefa);
    localStorage.setItem("tarefas", JSON.stringify(this._tarefas));
  }
}

export default TarefaController;
