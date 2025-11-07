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

function promedio() {
    let suma = 0;
    let contador = 1;
    while(contador <= 5) {
        let num = parseInt(prompt("Coloque números: "));
        suma += num
        contador++
    }
    let promedio = suma / 5;
    alert(`El promedio de los 5 números es: ${promedio}`)
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

function factorial() {
    let num = parseInt(prompt("Ingrese un número para mostras su factorial: "));
    let fac = 1;
    let largo = "1"
    let resultado = `EL factorial de ${num} es:`
    for (let i = 2; i <= num; i++) {
        resultado += ` ${i}`
        largo *= i
        fac *= i;
    }
    alert(`${resultado}  ${largo}  = ${fac}`)
}


function imparesSuma() {
    let num = parseInt(prompt("Ingresar número: "));
    let resultado = "El resultado es: "
    let suma = 0
    for (let i = 0; i <= num; i++) {
        if (i % 2 != 0) {
            resultado += ` + ${i}`
            suma += i
        }
        console.log(resultado)
    }
    alert(resultado)
}