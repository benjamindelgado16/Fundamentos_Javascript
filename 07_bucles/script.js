function ejecutarWhile() {
    let resultado = "El resultado es: ";
    let count = 10;
    while (count > 0) {
        resultado += ` ${count}`;
        count--
    }
    alert(resultado)
}


function ejecutarFor() {
    let resultado = "El resultado es: ";

    for (let i = 10; i > 0; i--) {
        resultado += ` ${i}`
    }
    alert(resultado);
}


function numero() {
    let resultado = "Contamos: ";
    let a = parseInt(prompt("Coloque un número: "));
    count = 1;
    while (count <= a) {
        resultado += ` ${count}`
        console.log(count)
        count++;
    }
    alert(resultado)
}

function numero2() {
    let resultado = "El resultado es: ";
    let a = parseInt(prompt("Coloque un número: "));
    while (a > 0) {
        resultado += ` ${a}`;
        a--
    }
    alert(resultado)
}

function sumarN() {
    let suma = 0;
    let sumar = parseInt(prompt("Ingrese un número: "));
    let resultado = "Suma: 0 "
    let contador = 1;
    while (contador <= sumar) {
        suma += contador;
        resultado += ` + ${contador} `;
        contador++
    }
    alert(`${resultado} = ${suma}`)
}

function multiplosDos() {
    let multiplo = parseInt(prompt("Ingresa un número: "));
    let contador = 1;
    let resultado = "El resultado es: "
    while (contador < multiplo) {
        contador++
        if (contador % 2 == 0) {
            resultado += ` ${contador}`
        }
    }
    alert(resultado)
}

/*5️⃣ Bucle for: Tabla de multiplicar
Pide un número al usuario e imprime su tabla de multiplicar del 1 al 10 en un solo alert.
 */

function multiplicar() {
    let mul = parseInt(prompt("Coloque un número: "));
    let resultado = `Tabla de ${mul}: `
    for (let i = 1; i <= 10; i++) {
        resultado += `\n ${mul} x ${i} = ${mul * i}`
    }
    alert(resultado)
}


/* 6️⃣ Bucle for: Números pares hasta n
Solicita un número n e imprime todos los números pares desde 1 hasta n usando un bucle for.

Ejemplo de resultado:
2, 4, 6, 8, 10 */

function pares() {
    let num = parseInt(prompt("Coloca un número: "));
    let resultado = "El resultado es: "
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            resultado += `  ${i} `
        }
    }
    alert(resultado)
}


/* 7️⃣ Bucle for: Contar letras de una palabra
Pide una palabra al usuario 
y muestra cuántas letras tiene usando un bucle for para recorrerla.*/

function contarLetras() {
    let palabra = prompt("Coloque una palabra: ");
    let cont = 0
    for (let i = 0; i < palabra.length; i++) {
        cont++
    }
    alert(`La palabra "${palabra} tiene ${cont} letras"`)
}

function factorial() {
    let numero = parseInt(prompt("Ingrese un número para mostras su factorial: "));
    let factorial = 1;
    let largo = "1";
    for (let i = 2; i <= numero; i++) {
        largo += ` * ${i}`
        factorial *= i;
    }
    alert(`El factorial de ${numero} es: ${largo} = ${factorial}`)
}

function sumaImpares() {
    let num = parseInt(prompt("Ingresar número: "));
    let resultado = "El resultado es: "
    let suma = 0
    for (let i = 0; i <= num; i++) {
        if (i % 2 != 0) {
            resultado += ` + ${i}`
            suma += i
        }
    }
    alert(resultado)
}