class FlixView{

    constructor(){
        
        this.title = document.querySelector('.modal-title-filme');
        this.poster = document.querySelector('.poster');
        this.year = document.querySelector('.year');
        this.runTime = document.querySelector('.run-time');
        this.genero = document.querySelector('.genero');
        this.sinopse = document.querySelector('.sinopse');
        this.imdb = document.querySelector('.imdb');

    };

    modal(objeto){
        
        console.log(objeto.Title);

        this.title.textContent = objeto.Title;
        this.poster.setAttribute("src", objeto.Poster);
        this.year.textContent = `Year: ${objeto.Year}`;
        this.runTime.textContent = `Runtime: ${objeto.Runtime}`;
        this.genero.textContent = `Genre: ${objeto.Genre}`;
        this.imdb.textContent = `IMDB Rating: ${objeto.imdbRating}`;
        this.sinopse.textContent = objeto.Plot;

    };
};