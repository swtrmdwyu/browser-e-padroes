class NegociacaoController {

    // Ao adicionar como propriedades do constructor é buscado o elemento apenas uma vez no DOM.
    constructor() {
        let $ = document.querySelector.bind(document); //bind fixa o contexto da função para document no querySelector.

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor'); 
    }

    

    adiciona(event) {
        event.preventDefault();
        
        let data = this._inputData.value.split('-');

        let negociacao = new Negociacao(
            this._inputData.value = new Date(data),
            this._inputQuantidade.value,
            this._inputValor.value
          );

        console.log(negociacao);
    }

    
}