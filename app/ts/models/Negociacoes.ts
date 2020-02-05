class Negociacoes {

    /* private _negociacoes: Array <Negociacao> = [] */
    //ou
    private _negociacoes: Negociacao[] =[]

    //adiciona uma negociacao do tipo negociacao
    novaNegociacao(negociacao: Negociacao){
        this._negociacoes.push(negociacao)
    }

    exibirArray():Negociacao[]{
        return [].concat(this._negociacoes)
    }
}