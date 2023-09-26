class NegociacaoController {

    // Ao adicionar como propriedades do constructor é buscado o elemento apenas uma vez no DOM.
    constructor() {
        let $ = document.querySelector.bind(document); //bind fixa o contexto da função para document no querySelector.

        this._inputValorinputData = $('#data');
        this._inputValorinputQuantidade = $('#quantidade');
        this._inputValorinputValor = $('#valor'); 
    }

    adiciona(event) {
        event.preventDefault();  
        console.log(this._inputValorinputData);
    }
}