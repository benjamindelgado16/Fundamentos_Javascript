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
    while (contador <= multiplo) {
        contador++
        if (contador % 2 == 0) {
            resultado += ` ${contador}`
        }
    }
    alert(resultado)
}