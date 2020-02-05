



//usar declare var apenas se os autores das bibliotecas não fornecerem o TypeScript definitions
/* declare var $: any; */
//usando o <T> garantimos que nosso componente se comportará de maneira flexivel, quando for usado em NegociacoesView  ele vai usar o model Negociacoes, quando for usado eme MensagemNegociacao ele usará a model string 
//usando o abstract avisamos o programador em tempo de compilação que ele não poderá prosseguir no código sem implementar todos os métodos descritos dentro de view
abstract class View <T>{
    //criando o elemento de exibição
    protected _elemento: JQuery
    //passando a instrução de pegar um seletor css para fazer o inner
    constructor(seletor: string) {
        this._elemento = $(seletor)

    }

    update(model: T) {
        // erro de compilação
        this._elemento.html( this.template(model))
    }

    abstract template(model:T): string;
}