/*
Crear un formulario que permita ingresar la información de un estudiante.
Luego, escuchar el evento submit sobre el form, capturando las entradas, e invocar un objeto 
Estudiante usando los valores ingresados, y asociar la instancia a un array de estudiantes.
Por último, disparar una salida en el HTML, a modo de confirmación de los datos registrados.
*/

const estudiantes = []
class Estudiante {
    constructor(literal) {
        this.id = estudiantes.length;
        this.nombre = literal.nombre;
        this.edad = literal.edad;
        this.curso = literal.curso;
     }
}
const formulario = document.createElement("form");
formulario.innerHTML = `<input type="text">
                        <input type="number">
                        <input type="text">
                        <input type="submit">`;
formulario.onsubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.children;
    estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
    document.body.append(' ALUMNO REGISTRADO ');
}
