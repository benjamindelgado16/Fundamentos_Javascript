// Declaración de variables
let coloresFavoritos = ["verde"," rojo"," azul"," morado"];
let usuario = ["Benjamin"," benjamindelgado@liceovvh.cl",  16];
let cadenaTexto = "Hola, mundo";
let valorBooleano = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const mes = "Junio";

// Funciones para mostrar cada valor con alert()
function mostrarColoresFavoritos() {
    alert("Colores Favoritos: " + coloresFavoritos);
}

function mostrarUsuario() {
    alert("Mostrar Usuario: " + usuario);
}

function mostrarCadenaTexto() {
    alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
    alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
    alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
    alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
    alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
    alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
    alert("Constante mes: " + mes);
}
