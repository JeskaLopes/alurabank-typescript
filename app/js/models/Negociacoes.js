class Negociacoes {
    constructor() {
        /* private _negociacoes: Array <Negociacao> = [] */
        //ou
        this._negociacoes = [];
    }
    //adiciona uma negociacao do tipo negociacao
    novaNegociacao(negociacao) {
        this._negociacoes.push(negociacao);
    }
    exibirArray() {
        return [].concat(this._negociacoes);
    }
}
