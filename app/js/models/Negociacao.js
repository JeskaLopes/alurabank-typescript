class Negociacao {
    constructor(_quantidade, _data, _valor) {
        this._quantidade = _quantidade;
        this._data = _data;
        this._valor = _valor;
    }
    get quantidade() {
        return this._quantidade;
    }
    get data() {
        return this._data;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
