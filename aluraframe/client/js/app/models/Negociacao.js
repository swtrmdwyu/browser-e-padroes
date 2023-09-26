class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data,
        this._quantidade = quantidade,
        this._valor = valor,
        Object.freeze(this) //não deixa as propriedades serem alteradas.
        //this.volume = this.valor * this.quantidade
    }

    bringVolume() {
        return this._quantidade * this.valor;
    }

    get data() {
        return this._data;
    }
    
    get quantidade() {
        return this._quantidade;
    }
    
    get valor() {
        return this._valor;
    }
}