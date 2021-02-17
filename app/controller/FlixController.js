class FlixController{

    constructor(filme){

        this.filme = filme;
        this.filmeModel = new Filme();

        this.view = new FlixView();
    }

    enviar(idFilme){

        this.filmeModel.requestFilm(idFilme);
        this.view.modal(this.filmeModel.title);
        
    }

}

