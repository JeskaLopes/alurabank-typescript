class Negociacao {

    //em typescript você declara as propriedades sem o constructor
    //o private garante que as propriedades privadas não podem ser modificadas diretamente no código
    /* private _quantidade;
    private _data;
    private _valor;
 */
    constructor(private _quantidade: number, private _data: Date, private _valor: number) {

        //o underline significa que nenhuma das propriedades com ele podem ser modificadas fora da class Negociação
        //nesse caso o underline serve para indicar que os parametros do contrutor de uma negociação não podem ser modificados uma vez submetidos
      /*   this._quantidade = quantidade;
        this._data = data;
        this. _valor = valor */
    }


    //já que não podemos acessar propriedades com underline diretamente, criamos getter que nos ajudam a acessa-las 
    get quantidade() {
        return this._quantidade
    }

    get data() {
        return this._data
    }

    get valor() {
        return this._valor
    }

    //getter de resultado da negociação

    get volume() {
        return this._quantidade * this._valor
    }
}