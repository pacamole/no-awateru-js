class Tarefa {
    constructor(id, idUsuarioCriador, titulo, descricao, usuariosAtribuidos, status, dataCriacao, dataLimite,) {
        this.id;
        this.idUsuarioCriador;
        this.titulo;
        this.descricao;
        this.usuariosAtribuidos;
        this.status;
        this.dataCriacao;
        this.dataLimite;
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
        return this._id = value;
    }

    set idUsuarioCriador(value) {
        return this._idUsuarioCriador = value;
    }

    set titulo(value) {
        return this._titulo = value;
    }

    set descricao(value) {
        return this._descricao = value;
    }

    set usuariosAtribuidos(value) {
        return this._usuariosAtribuidos = value;
    }

    set status(value) {
        return this._status = value;
    }

    set dataCriacao(value) {
        return this._dataCriacao = value;
    }

    set dataLimite(value) {
        return this._dataLimite = value;
    }

}