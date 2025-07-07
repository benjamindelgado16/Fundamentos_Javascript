function edadVotar() {
    let edad = parseInt(prompt("Ingrese su edad "));

    if (edad >= 18) {
        alert("Su edad " + edad + " aprovada para votar.");
    } else if (edad >= 0 && edad < 18) {
        alert("Su edad " + edad + " no esta aprovada para votar.");
    } else {
        alert("Ingrese un valor válido");
    }
}

function simularAcceso() {
    let usuario = "admin";
    let clave = "1234"
    let user = prompt("Ingresar usuario: ");
    let pass = parseInt(prompt("Ingrese contraseña: "));
    if (user == usuario && pass == clave) {
        //         alert("Acceso concedido...");
        //     } else {
        //         alert("Acceso denegado");
        //     }
        // };


        // function parImpar() {
        //     let num = parseInt(prompt("Colocar un número: "));
        //     if (num % 2 == 0) {
        //         alert("Es par");
        //     } else {
        //         alert("No es par");
        //     }
        // };

        // function temperatura() {
        //     let temp = parseInt(prompt("Coloque temperatura:"));
        //     if (temp >= 30 && temp <= 50) {
        //         alert(temp + " Hace calor")
        //     } else if (temp >= 15 && temp <= 30) {
        //         alert(temp + " esta fresco.");
        //     } else if (temp >= 0 && temp <= 15) {
        //         alert(temp + " hace frio")
        //     } else {
        //         alert("Colocar una temperatura valida")
        //     }
        // }

        // function dosNumeros() {
        //     let num1 = parseInt(prompt("Ingresar primer número"));
        //     let num2 = parseInt(prompt("Ingrese segundo número"));
        //     if (num1 > num2) {
        //         alert(num1 + " es mayor que " + num2);
        //     } else if (num1 < num2) {
        //         alert(num1 + " es menor que " + num2);
        //     } else if (num1 == num2) {
        //         alert(num1 + " es igual que " + num2);
        //     } else {
        //         alert("Coloque un número valido")
        //     }
        // }

        // function notas() {
        //     let ingresar = parseInt(prompt("Ingrese una nota: "));
        //     if (ingresar < 4) {
        //         alert("estas desaprobado")
        //     } else if (ingresar > 4 && ingresar <= 7) {
        //         alert("Estas aprobado")
        //     }

        // }

        // function administrador() {
        //     let name = "admin";
        //     let usuario = prompt("Ingrese un usuario: ")

        //     if (usuario == name) {
        //         alert("Bienvenido, admnistrador");
        //     } else {
        //         alert("No eres el administrador")
        //     }
        // }

        // function palabramayusculaA() {
        //     let letra = prompt("Ingrese una palabra: ");
        //     let letraA = "A"
        //     if (letra[0] == letraA) {
        //         alert("La palabra empieza con A mayuscula");
        //     } else {
        //         alert("La palabra no empieza con a mayuscula");
        //     }
        // }

        // //  Solicita el precio de un producto. Si el precio es mayor a 10000, muestra que aplica descuento. Si no, indica precio normal.

        function descuento() {
            let iva = 0.19;
            let descuento = parseFloat(prompt("Ingrese el valor de descuento: ejemplo 20"));
            descuento /= 100; // operacion para llevar decimal 
            let precio = parseFloat(prompt("Ingresar precio del producto: "))

            if (precio > 10000 & descuento) {
                alert(`El valor ingresado fue: ${precio}`);
            } else {
                alert("El precio del producto sera el normal");
            }
        };

        // //  Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no"). Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. Si no, muestra “No puede conducir”.

        // function edadConducir() {
        //     let edad = parseInt(prompt("¿Cual es tu edad? "))
        //     let licencia = prompt("¿Usted tiene licencia?")

        //     if (edad >= 18 && licencia == "si") {
        //         alert("si puede conducir");
        //     } else {
        //         alert("Usted no puede conducir ");
        //     }
        // };


        // function longitudPalabras() {
        //     let longitud = prompt("Ingrese la primera palabra:");
        //     let palabra = prompt("Ingrese la segunda palabra:");

        //     if (longitud === palabra) {
        //         alert("Las palabras tienen la misma longitud")
        //     } else if (longitud > palabra) {
        alert(longitud + " es más larga que " + palabra)
    } else if (longitud < palabra) {
        alert(longitud + " es más corta que " + palabra)
    } else {
        alert("Ingrese una palabra valida")
    }
}
