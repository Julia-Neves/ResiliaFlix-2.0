class Filme {
    constructor() {
        this._title = "";
        this._erro = "";
    }

    get title() {
        return this._title;
    }

    get erro(){
        return this._erro;
    }

    requestFilm(filme){

        let request = new XMLHttpRequest;
        request.open("GET", 
        `http://www.omdbapi.com/?t=${filme}&plot=full&&apikey=65ef2f10`, false);
        
        request.addEventListener("load", () => {
           
               
            if (request.status == 200) {
                let response = JSON.parse(request.responseText);

                this._title = response;
                

                if(this._title.Response == 'False'){
                    this._erro = response;
                    
                }
                
            }else{
                
            }

        })
        request.send()
    }

}

