class FlixController{

    constructor(filme){

        this.inputBuscar = document.querySelector('#inputBuscar');
        this.btnBuscar = document.querySelector('#btnBuscar');

        this.filme = filme;
        this.filmeModel = new Filme();

        this.view = new FlixView();
        this.buscar();
    };


    enviar(idFilme){

        this.filmeModel.requestFilm(idFilme);
        this.view.modal(this.filmeModel.title);
        
    };


    buscar(){
        
        this.btnBuscar.addEventListener('click', (event) =>{

            event.preventDefault();
            this.enviar(this.inputBuscar.value);
            
        });
        
    };

};

