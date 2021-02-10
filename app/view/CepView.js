class CepView{
    constructor(model){
        this._model = model;
    }

    fillCepData(){
        let $ = document.querySelector.bind(document);

        let logradouro = $("#inputAddress");
        logradouro.value = this._model.logradouro

        let complemento = $("#inputAddress2");
        complemento.value = this._model.complemento

        let bairro = $("#inputNeighborhood");
        bairro.value = this._model.bairro

        let localidade = $("#inputCity");
        localidade.value = this._model.localidade
    }
}