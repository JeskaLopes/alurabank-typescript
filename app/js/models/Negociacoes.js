class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    novaNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }
    exibirArray() {
        return [].concat(this._negociacoes);
    }
}
