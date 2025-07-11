class Comentario {
    constructor(id, idUsuario, idTarefa, comentario, dataCriacao) {
        this._id = id;
        this._idUsuario = idUsuario;
        this._idTarefa = idTarefa;
        this._comentario = comentario;
        this._dataCriacao = dataCriacao;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get idUsuario() {
        return this._idUsuario;
    }

    set idUsuario(value) {
        this._idUsuario = value;
    }

    get idTarefa() {
        return this._idTarefa;
    }

    set idTarefa(value) {
        this._idTarefa = value;
    }

    get comentario() {
        return this._comentario;
    }

    set comentario(value) {
        this._comentario = value;
    }

    get dataCriacao() {
        return this._dataCriacao;
    }

    set dataCriacao(value) {
        this._dataCriacao = value;
    }
}