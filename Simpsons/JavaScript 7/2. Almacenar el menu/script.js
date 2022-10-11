let comidas = localStorage.getItem('comidas');
if (comidas == null) {
    const menu = [];
    for (let index = 0; index < 5; index++) {
        menu.push(prompt('INGRESAR COMIDA'))
    }
    localStorage.setItem('comidas', menu);
} else {
    let menu = '';
    const arrayComidas = comidas.split(',');
    for (const nombreComida of arrayComidas) {
        menu += nombreComida + '\n';
    }
    alert(menu);
}
