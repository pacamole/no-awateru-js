class Historico {
    constructor(id, idtarefa, idUsuario, msgAlteracao, dataCriacao) {
        this._id;
        this._idtarefaid;
        this._idUsuarioid;
        this._msgAlteracaoid;
        this._dataCriacaoid;
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
        return this._msgAlteracaoid;
    }
    set msgAlteracao(value) {
        this._msgAlteracaoid = value;
    }

    get dataCriacao() {
        return this._dataCriacaoid;
    }
    set dataCriacao(value) {
        this._dataCriacaoid = value;
    }
}