// Verificar edad y etapa de vida 
function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad < 13) {
        alert("Eres un niño!")
    } else if (edad >= 13 && edad < 18) {
        alert("Eres un Adolesente")
    } else {
        alert("Eres un adulto")
    }
}

//Validar La contraseña
function validarContraseña() {
    let contraseña = "12345";
    let validar = prompt("Ingrese contraseña");
    if (contraseña === validar) {
        alert("Acceso concedido")
    } else {
        alert("Acceso denegado")
    }
}

//Validar letra e 
function validarLetraE() {
    let letra = prompt("Coloque una palabra");
    if (letra.toLowerCase().includes("e")) {
        alert("la palabra contiene e")
    } else {
        alert("la palabra no contiene e")
    }
}

// Comparar 2 numeros
function compararDosNumeros() {
    let n1 = parseInt(prompt("Indique un número"));
    let n2 = parseInt(prompt("Indique otro número"));
    if (n1 > n2) {
        alert(`${n1} es mayor que ${n2}`)
    } else if (n1 < n2) {
        alert(`${n1} es menor que ${n2}`)
    } else if (n1 === n2) {
        alert(`los dos números son iguales`)
    } else {
        alert(`Coloque algo valido`)
    }
}

function parImpar() {
    let par = parseInt(prompt("Coloque un número"));
    let impar = parseInt(prompt("Coloque otro número"));
    if (par % impar) {
        alert(`Es par`)
    } else {
        alert(`Es impar`)
    }
}
