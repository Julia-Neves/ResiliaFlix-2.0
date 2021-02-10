class CepModel{
    constructor(){
        this._logradouro = "",
        this._complemento = "",
        this._bairro = "",
        this._localidade = ""
    }
    
    get logradouro(){
        return this._logradouro;
    }

    get complemento(){
        return this._complemento;
    }

    get bairro(){
        return this._bairro;
    }

    get localidade(){
        return this._localidade;
    }


    getCEP(cep){
        let CEP = `https://viacep.com.br/ws/${cep}/json/`

        let request = new XMLHttpRequest();

        request.open("GET", CEP, false);

        request.addEventListener("load", () => {
            if(request.status == 200){

                let response = JSON.parse(request.responseText);

                this._logradouro = response.logradouro || "NO ADRESS DEFINED"
                this._complemento = response.complemento || "NO ADRESS 2 DEFINED"
                this._bairro = response.bairro || "NO NEIGHBORHOOD DEFINED"
                this._localidade = response.localidade || "NO CITY DEFINED"

            }else{
                alert("Ops, we couldn't find this Zip Code, try again!")
            }
        });

        request.send();
    }
};