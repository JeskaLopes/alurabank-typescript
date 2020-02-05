class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._MensagemNegociacao = new MensagemNegociacao('#mensagemView');
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adicionaNegociacao(e) {
        e.preventDefault();
        const negociacao = new Negociacao(parseInt(this._inputQuantidade.val()), new Date(this._inputData.val().replace(/-/g, ',')), parseFloat(this._inputValor.val()));
        this._negociacoes.novaNegociacao(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._MensagemNegociacao.update('Negociação realizada com Sucesso !');
    }
}
