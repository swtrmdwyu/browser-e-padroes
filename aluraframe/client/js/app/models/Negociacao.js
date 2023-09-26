class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data,
        this.quantidade = quantidade,
        this.valor = valor
        //this.volume = this.valor * this.quantidade
    }

    bringVolume() {
        return this.quantidade * this.valor;
    }
}