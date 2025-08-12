import Tarefa from "../module/tarefa.js";

class TarefaController {
  _storageName = "tarefas";

  constructor() {
    this._listaTarefas = this._carregarLocalStorage();
  }

  _carregarLocalStorage() {
    try {
      const dados = localStorage.getItem(this._storageName) || [];
      const listaObj = JSON.parse(dados);

      return listaObj.map((obj) => Object.assign(new Tarefa(), obj));
    } catch (error) {
      if (error instanceof SyntaxError) {
        localStorage.setItem(this._storageName, []);
        return [];
      }
      console.log("Erro ao carregar tarefas do localStorage: ", error);
      return [];
    }
  }

  _salvarLocalStorage() {
    localStorage.setItem(this._storageName, JSON.stringify(this._listaTarefas));
  }

  _gerarId() {
    let maiorId = 1;
    if (this._listaTarefas.length === 0) {
      return 1;
    }

    this._listaTarefas.forEach((trf) => {
      if (trf.id > maiorId) {
        maiorId = trf.id;
      }
    });

    return maiorId + 1;
  }

  adicionarTarefa(tarefa) {
    if (
      typeof tarefa.idUsuario == undefined &&
      tarefa.idUsuario == null &&
      tarefa.idUsuario == 0
    ) {
      throw new Error("O id do usuario criador não pode ser nulo, ou zero.");
    }

    if (tarefa.titulo == undefined || tarefa.titulo == null) {
      throw new Error("O título não pode ser nulo ou vazio.");
    }

    if (tarefa.titulo.length > 30) {
      throw new Error("O título deve ter no máximo 30 caracteres.");
    }

    if (tarefa.descricao.length > 300) {
      throw new Error("A descrição deve ter no máximo 300 caracteres.");
    }

    if (tarefa.dataCriacao > tarefa.dataLimite) {
      throw new Error("A data limite não pode ser menor que a data atual.");
    }

    this._listaTarefas.push(tarefa);
    this._salvarLocalStorage();
  }

  listarTarefas() {
    return this._listaTarefas;
  }

  buscarTarefa(id) {
    return this._listaTarefas.find((tarefa) => tarefa.id === id);
  }

  listarResponsaveis(idTarefa) {
    return this._listaTarefas.find((tarefa) => {
      if (tarefa.id === idTarefa) {
        return tarefa.idResponsaveis;
      }
    });
  }

  editarTarefa(idTarefa, tarefaEditada) {
    const index = this._listaTarefas.findIndex(
      (tarefa) => tarefa.id === idTarefa
    );

    if (tarefaEditada.titulo == undefined || tarefaEditada.titulo == null) {
      throw new Error("O título não pode ser nulo ou vazio.");
    }

    if (tarefaEditada.titulo.length > 30) {
      throw new Error("O título deve ter no máximo 30 caracteres.");
    }

    if (tarefaEditada.descricao.length > 300) {
      throw new Error("A descrição deve ter no máximo 300 caracteres.");
    }

    if (tarefaEditada.dataCriacao > tarefaEditada.dataLimite) {
      throw new Error("A data limite não pode ser menor que a data atual.");
    }

    if (index) {
      this._listaTarefas[index] = tarefaEditada;
      this._salvarLocalStorage();
    }
  }

  removerTarefa(idTarefa) {
    this._listaTarefas = this._listaTarefas.filter((t) => t.id !== idTarefa);
    this._salvarLocalStorage();
  }
}

export default TarefaController;
