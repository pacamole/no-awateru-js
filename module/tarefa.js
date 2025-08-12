class Tarefa {
  constructor(
    id,
    idUsuario,
    titulo,
    descricao,
    idResponsaveis = [],
    status,
    dataCriacao,
    dataLimite
  ) {
    this._id = id;
    this._idUsuario = idUsuario;
    this._titulo = titulo;
    this._descricao = descricao;
    this._idResponsaveis = idResponsaveis;
    this._status = status;
    this._dataCriacao = new Date(dataCriacao);
    this._dataLimite = new Date(dataLimite);
  }

  get id() {
    return this._id;
  }

  get idUsuario() {
    return this._idUsuario;
  }

  get titulo() {
    return this._titulo;
  }

  get descricao() {
    return this._descricao;
  }

  get idResponsaveis() {
    return this._idResponsaveis;
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

  set idUsuario(value) {
    return (this._idUsuario = value);
  }

  set titulo(value) {
    return (this._titulo = value);
  }

  set descricao(value) {
    return (this._descricao = value);
  }

  set idResponsaveis(value) {
    return (this._idResponsaveis = value);
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

export default Tarefa;
