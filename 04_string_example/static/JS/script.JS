
function usarString() {
    // Uso de Strings Ejemplo

    let nombre = prompt("Ingrese su nombre: "); //Variable tipo texto
    //Uso de Length --> Largo de una variable
    let primeraLetra = nombre[0]; //Asignamos valor a primera letra con posición 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1]; 
    alert("Primera letra es: " + primeraLetra +
        "\nÚltima letra es: " + ultimaLetra
    ); //Mostrar resultados
}
//Tarea: Imprimir segunda letra y penultima de el apellido
function letrasApellido() {
    let apellido = prompt("Ingrese su apeliido: ");
    let segundaLetra = apellido[1]; //Asignamos valor a segunda letra con posición 0 de nombre
    let penultimaultimaLetra = apellido[apellido.length - 2]; //Asignamos valor a penultima letra con posición -2 de nombre
    alert("Segunda letra es: " + segundaLetra +
        "\nPenultima letra es: " + penultimaultimaLetra
    ); //Mostrar resultados
}