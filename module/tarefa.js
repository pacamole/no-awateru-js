class Tarefa {
  constructor(
    id,
    idUsuarioCriador,
    titulo,
    descricao,
    idUsuariosAtribuidos = [],
    status,
    dataCriacao,
    dataLimite
  ) {
    this._id = id;
    this._idUsuarioCriador = idUsuarioCriador;
    this._titulo = titulo;
    this._descricao = descricao;
    this._idUsuariosAtribuidos = idUsuariosAtribuidos;
    this._status = status;
    this._dataCriacao = dataCriacao;
    this._dataLimite = dataLimite;
  }

  get id() {
    return this._id;
  }

  get idUsuarioCriador() {
    return this._idUsuarioCriador;
  }

  get titulo() {
    return this._titulo;
  }

  get descricao() {
    return this._descricao;
  }

  get usuariosAtribuidos() {
    return this._usuariosAtribuidos;
  }

  get status() {
    return this._status;
  }

  get dataCriacao() {
    return this._dataCriacao;
  }

  get dataLimite() {
    return this._dataLimite;
  }

  set id(value) {
    return (this._id = value);
  }

  set idUsuarioCriador(value) {
    return (this._idUsuarioCriador = value);
  }

  set titulo(value) {
    return (this._titulo = value);
  }

  set descricao(value) {
    return (this._descricao = value);
  }

  set usuariosAtribuidos(value) {
    return (this._usuariosAtribuidos = value);
  }

  set status(value) {
    return (this._status = value);
  }

  set dataCriacao(value) {
    return (this._dataCriacao = value);
  }

  set dataLimite(value) {
    return (this._dataLimite = value);
  }
}

export default Tarefa