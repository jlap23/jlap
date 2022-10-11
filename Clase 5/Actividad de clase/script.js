class Libro {
    constructor(titulo, paginas, genero, color) {
        this.title = titulo;
        this.pages = paginas;
        this.genre = genero;
        this.color = color;
    }
    leer(){
        console.log("Este libro es del Genero "+(this.genre) + " y tiene "+(this.pages));
    }
}

let libro1 = new Libro("it", 237, "Terror","Rojo");
libro1.leer();
let libro2 = new Libro("Nohe demonio",587,"sUSPENSO","negro");
libro2.leer();
