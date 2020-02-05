class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._MensagemNegociacao = new MensagemNegociacao('#mensagemView');
        //abertura e fechamento das tags significa casting, quando eu converto um tipo mais genérico para um tipo mais especifico, nesse caso de Element para HTMLInputElement
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputData = document.querySelector('#data');
        this._inputValor = document.querySelector('#valor');
        // atualiza a view para exibir os dados do modelo, vazio
        this._negociacoesView.update(this._negociacoes);
    }
    adicionaNegociacao(e) {
        e.preventDefault();
        const negociacao = new Negociacao(parseInt(this._inputQuantidade.value), new Date(this._inputData.value.replace(/-/g, ',')), parseFloat(this._inputValor.value));
        this._negociacoes.novaNegociacao(negociacao);
        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._negociacoes);
        //chamando a mensagem depois de adicionar a negociacao
        this._MensagemNegociacao.update('Negociação realizada com Sucesso !');
        /* this._negociacoes.exibirArray().forEach(negociacao =>{


            console.log(negociacao.quantidade)
            console.log(negociacao.data)
            console.log(negociacao.valor)
        }) */
    }
}
/*
 */ 
