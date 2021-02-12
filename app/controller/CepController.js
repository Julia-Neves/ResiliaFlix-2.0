class CepController{

    searchCep(cep){
        let cepModel = new CepModel(); //instanciando a model do CEP
        cepModel.getCEP(cep);

        let cepView = new CepView(cepModel); //instanciando a view do CEP, mas passando para o constructor a variável da model (cepModel)
        cepView.fillCepData(); //aqui chama a função que preenche os dados 
    }
}

let cepController = new CepController(); //instanciando a controller para poder chama-la abaixo

let inputCep = document.querySelector("#inputZip"); //identificando a id do inputZip 

inputCep.addEventListener("blur", ()=> { //ao clicar para fora do input, ele carrega as outras informações
    cepController.searchCep(inputCep.value);
})

