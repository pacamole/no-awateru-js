class Historico {
  constructor({ id, idtarefa, idUsuario, msgAlteracao, dataCriacao }) {
    this._id = id;
    this._idtarefa = idtarefa;
    this._idUsuario = idUsuario;
    this._msgAlteracao = msgAlteracao;
    this._dataCriacao = dataCriacao;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }

  get idtarefa() {
    return this._idtarefaid;
  }
  set idtarefa(value) {
    this._idtarefaid = value;
  }

  get idUsuario() {
    return this._idUsuarioid;
  }
  set idUsuario(value) {
    this._idUsuarioid = value;
  }

  get msgAlteracao() {
    return this._msgAlteracao;
  }
  set msgAlteracao(value) {
    this._msgAlteracao = value;
  }

  get dataCriacao() {
    return this._dataCriacaoid;
  }
  set dataCriacao(value) {
    this._dataCriacaoid = value;
  }
}
