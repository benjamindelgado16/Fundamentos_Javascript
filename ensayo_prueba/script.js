function datos() {
    let nombre = prompt("Coloque su nombre completo: ");
    let edad = prompt("Coloque su edad: ");
    let nacimiento = prompt("Coloque su fecha de nacimiento(07/10/2000): ");
    alert(`Hola ${nombre} tienes ${edad} años y naciste en ${nacimiento}`);
}


function tres() {
    let num = parseInt(prompt("Coloque un número: "));
    let resultado = num / 3 + 10 * 2;

    alert(`El resultado de ${num} divido en 3 sumado 10 y multiplicado en 2 es igual a ${resultado}`)
}

function creciente() {
    let n1 = parseInt(prompt("Coloque un número: "));
    let n2 = parseInt(prompt("Coloque otro número: "))

    if(n1 > n2) {
        alert("Estado creciente")
    } else if(n1 < n2) {
        alert("Estado decreciente")
    }
}


//5
function naturales() {
    let num = parseInt(prompt("Coloque un número natural: "));
    let resultado = "El resultado es: ";
    let suma = 1;
    for(let i = 1; i <= num; i++) {
        resultado += ` ${i} +`
        suma += i
    }
    alert(`${resultado} = ${suma}`)
}


function pares() {
    let resultado = parseInt(prompt("Coloque el número 100:"));
    for(let i = 1; i <= 100; i++) {
        if(i % 2 == 0) {
            resultado += ` ${i}`
        }
    }
    alert(resultado)
}

function impares() {
    let num = parseInt(prompt("Coloque el número 100:"));
    for(let i = 1; i <= 100; i++) {
        if(i % 2 !== 0) {
            num += ` ${i}`
        }
    }
    alert(` ${num}`)
}

