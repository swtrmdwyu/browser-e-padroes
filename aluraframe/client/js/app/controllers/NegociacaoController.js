class NegociacaoController {
    adiciona(event) {
        event.preventDefault();
         
        let $ = document.querySelector.bind(document); //bind fixa o contexto da função para document no querySelector.

        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor'); 

        console.log(inputData);
    }
}