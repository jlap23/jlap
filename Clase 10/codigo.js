//STORAGE
 //localStorage.setItem("usuario","Alfredo Lopez");
 //localStorage.setItem("anio",2022);
// localStorage.setItem("envio",true);

let usuarioActivo = localStorage.getItem("usuario");
let anioActual = parseInt(localStorage.getItem("anio"));
let envioADomic = (localStorage.getItem("envio")=="true");

console.log(usuarioActivo);
console.log(anioActual);
console.log(envioADomic);

//sessionStorage.setItem("tipografia","Monospace");
sessionStorage.setItem("precios",[1200,999,789,3500]);
let listaDePrecios = sessionStorage.getItem("precios").split(",").map((precio)=>parseInt(precio));
console.log(listaDePrecios);

//Diapo 19
//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}

//remover una dupla
sessionStorage.removeItem("precios");

//remover todo
//localStorage.clear();


//objetos
const auto={
    marca:"Volvo",
    modelo:"C30",
    color:"gris",
    precio:15000
}

//localStorage.setItem("miauto",auto); no me sirve object Object

const objetoAJson = JSON.stringify(auto);
console.log(objetoAJson);
localStorage.setItem("miauto",objetoAJson);

const traidoDelStorage = localStorage.getItem("miauto");
const jsonAObjeto = JSON.parse(traidoDelStorage);
console.log(jsonAObjeto);

//diapos 34 y 35
const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));

class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos2 = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
    productos2.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productos2)
    producto.sumaIva();

console.table(productos2);

//clave que no existe
console.log(localStorage.getItem("color"));

//DARK LIGHT MODE
let principal = document.getElementById("principal");
let boton = document.getElementById("mode");
let modo = localStorage.getItem("modo");

//primer renderizado
if(modo != null){
    if(modo == "dark"){
        document.body.className = modo;
        principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center "+modo;
        boton.innerText="Light Mode";
    }
}else{
    modo = "light";
}

//evento del boton
boton.onclick = () => {
    if(modo == "light"){
        document.body.className="dark";
        principal.classList.remove("light");
        principal.classList.add("dark");
        boton.innerText="Light Mode";
        modo = "dark";
    }else{
        document.body.className="light";
        principal.classList.remove("dark");
        principal.classList.add("light");
        boton.innerText="Dark Mode";
        modo = "light";
    }
    localStorage.setItem("modo",modo);
}


