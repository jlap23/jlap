//promesas y asincronía

const contenedor = document.getElementById("ok");
const botonVer = document.getElementById("ver");

botonVer.onclick=()=>{
    let imagen=document.createElement("img");
    imagen.setAttribute("src","/images/droopy.jpg");
    contenedor.appendChild(imagen);
    setTimeout(()=>{
        contenedor.removeChild(imagen);
    },2000);
    console.log("Droopy fue removido");
}

//CALL STACK
function pelarPapas(){
    console.log("Estoy pelando papas");
}

function cortarPapas(){
    console.log("Estoy cortando papas");
}

function freirPapas(){
    calentarAceite();
    console.log("Estoy friendo papas");
}

function calentarAceite(){
    console.log("Calentando el aceite");
}

function prepararPapasFritas(){
    pelarPapas();
    cortarPapas();
    freirPapas();
    console.log("VENGAN A COMER!");
}

prepararPapasFritas();

//setInterval()
let botonTimer=document.getElementById("btnTiempo");
let segundero = document.getElementById("segundos");
segundero.innerText="0";

botonTimer.onclick=()=>{
    let intervalo=setInterval(()=>{
        segundero.innerText=parseInt(segundero.innerText)+1;
        if(segundero.innerText=="12"){
            clearInterval(intervalo);
        }
    },1000);
}

//Promesas
const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada');
        }, 2000);
    })
}
eventoFuturo(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("Fin del proceso")
    })


// eventoFuturo(false)
//     .then( (response) => {
//         console.log(response) // Promesa resuelta
//     })
//     .catch( (error) => {
//         console.log(error)
//     })
//     .finally( () => {
//         console.log("Fin del proceso")
//     })

//Diapos 53 y 54
// función que tras 3 segundo retorna un array de objetos

const BD = [
    {id: 1, nombre: 'Producto 1', precio: 1500},
    {id: 2, nombre: 'Producto 2', precio: 2500},
    {id: 3, nombre: 'Producto 3', precio: 3500},
    {id: 4, nombre: 'Producto 4', precio: 3500},
]

const pedirProductos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(BD)
        }, 3000)
    })
}

// inicializamos con un array vacío
let productos = []

const renderProductos = (arr) => {
    // función que genere la vista de los productos
    let lista=document.createElement("ul");
    for(const item of arr){
        let itemLista=document.createElement("li");
        itemLista.innerText=item.nombre;
        lista.appendChild(itemLista);
    }
    document.getElementById("productos").appendChild(lista);
}

// asincrónicamente pedimos los datos y generamos la vista
pedirProductos()
    .then((res) => {
        productos = res
        renderProductos(productos)
    })

