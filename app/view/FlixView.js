class FlixView{

    constructor(){
        
        this.title = document.querySelector('.modal-title-filme');
        this.poster = document.querySelector('.poster');
        this.year = document.querySelector('.year');
        this.runTime = document.querySelector('.run-time');
        this.genero = document.querySelector('.genero');
        this.sinopse = document.querySelector('.sinopse');
        this.imdb = document.querySelector('.imdb');
        this.divImagem = document.querySelector('.div-imagem');
        this.divSinopse = document.querySelector('.sinopses');
        this.divBotao = document.querySelector(".div-botao-watchnow");

    };

    modal(objeto){
        
        this.title.textContent = objeto.Title;
        this.poster.setAttribute("src", objeto.Poster);
        this.year.textContent = `Year: ${objeto.Year}`;
        this.runTime.textContent = `Runtime: ${objeto.Runtime}`;
        this.genero.textContent = `Genre: ${objeto.Genre}`;
        this.imdb.textContent = `IMDB Rating: ${objeto.imdbRating}`;
        this.sinopse.textContent = objeto.Plot;
        this.imdb.textContent = objeto.imdbRating;
        
        this.poster.classList.remove('w-100');
        this.divImagem.classList.remove("border-end");
        this.divImagem.classList.remove("border-light");
        this.divSinopse.classList.remove("border");
        this.divSinopse.classList.remove("border-light");
        

        if(objeto.Response == "False"){
            this.poster.setAttribute("src", '../imgs/error.jpg');
            this.poster.classList.add('w-100');
            this.year.textContent = "";
            this.runTime.textContent = "";
            this.genero.textContent = "";
            this.imdb.textContent = "";
        }

    };
};