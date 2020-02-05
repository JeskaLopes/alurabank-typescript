class MensagemNegociacao extends View {
    //criando o que vai ser renderizado na view
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
