class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data,
        this._quantidade = quantidade,
        this._valor = valor
        //this.volume = this.valor * this.quantidade
    }

    bringVolume() {
        return this._quantidade * this.valor;
    }

    getData() {
        return this._data;
    }
    
    getQuantidade() {
        return this._quantidade;
    }
    
    getValor() {
        return this._valor;
    }
}