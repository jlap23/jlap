//GET
let libros=[];

function obtenerDatos(){
    const URLGET="https://api.itbook.store/1.0/new";
    fetch(URLGET)
        .then(resultado => resultado.json())
        .then(data => {
            console.log(data);
            libros=data.books;
            console.log(libros);
            libros.forEach((libro)=>{
                document.getElementById("libros").innerHTML += `
                    <tr>
                        <td>${libro.title}</td>
                        <td><img src=${libro.image}></td>
                    </tr>
                `;
            })
        });
}

obtenerDatos();

//POST
function enviarDatos(){
    const URLPOST="https://jsonplaceholder.typicode.com/posts";
    const nuevoPost={
        userId:4,
        title:"Info asincronia",
        body:"bla bla bla"
    }
    fetch(URLPOST,{
        method:"POST",
        body:JSON.stringify(nuevoPost),
        headers:{'Content-type': 'application/json; charset=UTF-8'}
    })
        .then(respuesta => respuesta.json())
        .then(datosRetorno => {
            console.log("Lo que retorna json placeholder al post");
            console.log(datosRetorno);
        })
}

enviarDatos();


//GET de un archivo .json propio
function obtenerDatosJson(){
    const URLJSON="/users.json";
    fetch(URLJSON)
        .then(res => res.json())
        .then(datosRecibidos => {
            const misEmpleados=datosRecibidos.empleados;
            misEmpleados.forEach(empleado => {
                document.getElementById("empleados").innerHTML += `
                    <p>${empleado.nombre}</p>
                `;
            })
            
        })
}

obtenerDatosJson();

//Diapo 68
const pedirPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
   
    data.forEach((post) => {
        document.body.innerHTML+=`
        <p>${post.title}</p>
        `;
    })
}

pedirPosts()