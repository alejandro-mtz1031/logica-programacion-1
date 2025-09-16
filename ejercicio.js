console.log("Ingrese 3 números cualquiera: ");

let mayor;
let medio;
let menor;

let num1 = parseInt(prompt("Número 1: "));
let num2 = parseInt(prompt("Número 2: "));
let num3 = parseInt(prompt("Número 3: "));

//* bloque de asignación

if (num1 >= num2 && num1 >= num3) { //* bloque para ver si num1 es el mayor de los 3 numeros
    //*ahora se decide entre num2 y num3 para ver cuál es el medio y menor
    mayor = num1;
    if ( num2 >= num3) { //* bloque para saber si num2 es medio o menor
        medio = num2;
        menor = num3;
    } else { //* bloque para saber si num 3 es menor
        medio = num3;
        menor = num2;
    }
} else if (num2 >= num1 && num2 >= num3) { //* bloque para ver si el num2 es el mayor de los 3 numeros
        mayor = num2;
    if (num1 < num2 && num1 >= num3) {
        medio = num1;
        menor = num3;
    } else {
        medio = num3;
        menor = num1;
    }

} else {
    mayor = num3;
    if ( num1 >= num2){
        medio = num1;
        menor = num2;
    } else {
        medio = num2;
        menor = num1;
    }
}

//* bloque de comparación

if (num1 === num2 && num1 === num3){
    console.log("Todos los números son iguales.")

} else {
    console.log("De mayor a menor: ", mayor, medio, menor);
    console.log("De menor a mayor: ", menor, medio, mayor);

}


