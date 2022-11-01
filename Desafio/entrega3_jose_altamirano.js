//After clase 9
//console.log(productos);
let carrito = [];
let contenedor = document.getElementById("misprods");
let btnFin =document.getElementById("finalizar");

//luxon
const DateTime = luxon.DateTime;
const inicio = DateTime.now();
console.log(inicio.toString());
console.log(inicio.zoneName);
console.log(inicio.daysInMonth);
console.log(inicio.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS));

function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id='btn${producto.id}' class="btn btn-primary">Comprar</button>
                </div>
            </div>   
        `;
    }

    //EVENTOS
    productos.forEach((producto)=>{
        //evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    });
}

renderizarProductos();

function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito);
    //alert("Producto "+productoAComprar.nombre+" agregado al carro!");
    //Sweet alert
    Swal.fire({
        title: productoAComprar.nombre,
        text: 'Se agregó al carrito',
        imageUrl: productoAComprar.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: productoAComprar.nombre,
      });
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoAComprar.id}</td>
            <td>${productoAComprar.nombre}</td>
            <td>${productoAComprar.precio}</td>
        </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
}

btnFin.onclick = () => {
    carrito=[];
    document.getElementById("tablabody").innerHTML="";
    document.getElementById("total").innerText = "Total a pagar $: ";
    //remover la clave del carrito en el storage
    //LUXON
    const fin = DateTime.now();
    const entrega = fin.plus({days:2});
    console.log(entrega.toLocaleString(DateTime.DATETIME_SHORT));
    const Interval = luxon.Interval;
    const tiempo = Interval.fromDateTimes(inicio,fin);
    console.log("Tiempo empleado en realizar la compra: "+tiempo.length("seconds"));
    //TOAST
    Toastify({
        text: "Recibirás tu pedido el día "+entrega.toLocaleString(DateTime.DATETIME_SHORT),   
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast();
}