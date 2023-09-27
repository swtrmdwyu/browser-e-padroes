class NegociacaoController {

    // Ao adicionar como propriedades do constructor é buscado o elemento apenas uma vez no DOM.
    constructor() {
        let $ = document.querySelector.bind(document); //bind fixa o contexto da função para document no querySelector.

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor'); 
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociaoesView'));

        this._negociacoesView.update(this._listaNegociacoes);
    }

    

    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._listaNegociacoes);       
        this._limpaFormulario();
    }

    _criaNegociacao() {
        let data = DateHelper.textToDate(this._inputData.value);

        return new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
          );

    }
    
    _limpaFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 0;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}