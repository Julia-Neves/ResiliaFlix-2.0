class Filme {
    constructor() {
        this._title = "";
    }

    get title() {
        return this._title;
    }

    requestFilm(filme){

        let request = new XMLHttpRequest;
        request.open("GET", 
        `http://www.omdbapi.com/?t=${filme}&plot=full&&apikey=65ef2f10`, false);

        request.addEventListener("load", () => {
            if (request.status == 200) {
                let response = JSON.parse(request.responseText);

                this._title = response;
                console.log(this._title);
            }
        })
        request.send()
    }

}

