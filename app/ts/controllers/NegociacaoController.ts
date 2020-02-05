class NegociacaoController{
    
    /* ANTERIORMENTE ANTES DO JQUERY private _inputQuantidade :HTMLInputElement; */
    private _inputQuantidade :JQuery;
    private _inputData :JQuery;
    private _inputValor :JQuery;
    private _negociacoes:Negociacoes = new Negociacoes()
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _MensagemNegociacao =  new MensagemNegociacao('#mensagemView')

    constructor(){

        //abertura e fechamento das tags significa casting, quando eu converto um tipo mais genérico para um tipo mais especifico, nesse caso de Element para HTMLInputElement
        // anteriormente antes do jquery this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade')
        this._inputQuantidade = $('#quantidade')
        this._inputData = $('#data')
        this._inputValor = $('#valor')
         // atualiza a view para exibir os dados do modelo, vazio
        this._negociacoesView.update(this._negociacoes);
    }
 
    adicionaNegociacao(e: Event) {
        e.preventDefault();

        const negociacao = new Negociacao(
            parseInt(this._inputQuantidade.val()),
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.novaNegociacao(negociacao)
        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._negociacoes);

        //chamando a mensagem depois de adicionar a negociacao

        this._MensagemNegociacao.update('Negociação realizada com Sucesso !')



            /* this._negociacoes.exibirArray().forEach(negociacao =>{


                console.log(negociacao.quantidade)
                console.log(negociacao.data)
                console.log(negociacao.valor)
            }) */
    }
}

/*
 */