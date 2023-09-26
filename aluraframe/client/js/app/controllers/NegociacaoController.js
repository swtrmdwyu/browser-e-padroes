class NegociacaoController {

    // Ao adicionar como propriedades do constructor é buscado o elemento apenas uma vez no DOM.
    constructor() {
        let $ = document.querySelector.bind(document); //bind fixa o contexto da função para document no querySelector.

        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor'); 
    }

    adiciona(event) {
        event.preventDefault();  
        console.log(this.inputData);
    }
}