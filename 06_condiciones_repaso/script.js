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
    if (par % 2 == 0) {
        alert(`Es par`)
    } else {
        alert(`Es impar`)
    }
}

function palabraInicial() {
    let letraA = prompt("Coloque una palabra");
    if (letraA[0].toLowerCase() === "a") {
        alert("La palabra empieza con a")
    } else {
        alert("La palabra no empieza con a ")
    }
}

function temperatura() {
    let ambiente = parseInt(prompt("Coloque la temperatura"));
    if (ambiente < 10) {
        alert("Hace frio")
    } else if (ambiente >= 10 && ambiente <= 25) {
        alert("Esta fresco")
    } else if (ambiente >= 25 && ambiente < 42) {
        alert("Hace calor") 
    } else if (ambiente > 42) {
        alert("Hace demasiado calor")
    } else {
        alert("Error")
    }
}

function nombreReconocido() {
    let name1 = "Dany";
    let name2 = "Ely";
    let nombre = prompt("Coloque un nombre");
    if (nombre === name1) {
        alert("Hola profesor")
    } else if (nombre === name2) {
        alert("Hola Mamá")
    } else {
        alert("Hola visitante")
    }
}

function nota() {
    let notas = parseFloat(prompt("Coloque su Nota")); 
    if (notas < 4) {
        alert("Reprobado");
    } else if (notas >= 4 && notas <= 5) {
        alert("Buena")
    } else if (notas >= 6 && notas <= 7) {
        alert("Excelente")
    } else {
        alert("Error")
    }
}

function palabraClave() {
    let clave = prompt("Coloque una frase")
    if(clave.toLowerCase().includes("jesus")) {
        alert("Contiene la palabra clave")
    } else {
        alert("La frase no contiene la palabra clave")
    }
}
