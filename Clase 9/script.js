//eventos DOM

const carrito = [];
const yerbaMate = {
    id:1,
    imagen:"./imagenes/yerba.jpg",
    nombre:"Yerba mate Taragui",
    description:"Yerba mate con palo 1 kg",
    precio:800
}


let articuloTarjeta = document.getElementById("tarjetas");

articuloTarjeta.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${yerbaMate.imagen}" alt="${yerbaMate.nombre}">
        <div class="card-body">
            <h5 class="card-title">${yerbaMate.nombre}</h5>
            <p class="card-text">${yerbaMate.description}</p>
            <p class="card-text">Precio $ ${yerbaMate.precio}</p>
            <button id="miBoton" class="btn btn-primary">Comprar</button>
        </div>
    </div>
`;

let miBoton= document.getElementById("miBoton");


//opcion 1
//miBoton.addEventListener("click",agregarAlCarro);

function agregarAlCarro(){
    alert("La yerbamate fue agregada con exito a su carrito!");
    carrito.push(yerbaMate);
    console.table(carrito);
}


//opcion 2
miBoton.onclick = () => {
    agregarAlCarro();
}

//OPCION 3
miBoton.onmouseover = () => {
    console.log("un mate");
    miBoton.className = "btn btn-warning";
}

miBoton.onmouseout =() => {
    miBoton.className = "btn btn-primary";
}


//eventos de teclado
let campoNombre = document.getElementById("nombre");
let campoEdad = document.getElementById("edad");

campoEdad.onkeydown = () => {
    console.log("Se dectecta tecla");
}

campoEdad.onkeyup = () => {
    console.log("Se suelta tecla");
}

campoEdad.onchange = () => {
    console.log("Cambia contenido - actualizado: " + campoEdad.value);
    if(campoEdad.value <= 0){
        alert("invalida");
        campoEdad.value="";
    }
}

//input
campoNombre.oninput = () => {
    if (isNaN(campoNombre.value)){
        //si no e snumero
        campoNombre.style.color="black";
    }else{
        campoNombre.style.color="red";
    }
}

//evento submit
let formulario = document.getElementById("formulario");
formulario.addEventListener("sumbit",validar);

function validar(e){
    if((campoNombre.value=="")||(campoEdad.value=="")){
        e.preventDefault();//evitamos que se borren los campos xq faltna datos
        alert("ingrse nombre o edad validos");
    }
}

//evento detectando una tecla especifica

function capturarEnter(e){
    if(e.which == 13 || e.keycode == 13);
    alert("Presionaste el ENTER");
}