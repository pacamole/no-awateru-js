class Usuario {
  constructor({ id, nome, email, senha, dataCriacao }) {
    this._id = id;
    this._nome = nome;
    this._email = email;
    this._senha = senha;
    this._dataCriacao = dataCriacao;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get nome() {
    return this._nome;
  }

  set nome(value) {
    this._nome = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get senha() {
    return this._senha;
  }

  set senha(value) {
    this._senha = value;
  }

  get dataCriacao() {
    return this._dataCriacao;
  }

  set dataCriacao(value) {
    this._dataCriacao = value;
  }
}
