class MensagemNegociacao extends View <string>{
    

    //criando o que vai ser renderizado na view

    template(model: string){
        return `<p class="alert alert-info">${model}</p>`
    }
}