//declarar na mesma ordem que foi construido o model de Negociação (quantidade, data e valor )
/* const negociacaoTeste = new Negociacao(50, new Date(), 2000)
console.log(negociacaoTeste.quantidade) */

const controller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit',controller.adicionaNegociacao.bind(controller));