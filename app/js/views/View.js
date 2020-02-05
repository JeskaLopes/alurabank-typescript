//usando o <T> garantimos que nosso componente se comportará de maneira flexivel, quando for usado em NegociacoesView  ele vai usar o model Negociacoes, quando for usado eme MensagemNegociacao ele usará a model string 
class View {
    //passando a instrução de pegar um seletor css para fazer o inner
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        // erro de compilação
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        throw new Error('Você deve implementar o método template');
    }
}
