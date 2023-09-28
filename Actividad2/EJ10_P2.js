let num1 = parseInt(prompt("Dime un número a adivinar"));
let num2 = parseInt(prompt("Adivina el número"));

while (num1 != num2) {

    if (num2 > num1) {

        alert("EL numero buscado es menor");

    }else{

        alert("El número buscado es mayor");

    }

    n2 = parseInt(prompt("Adivina el número"));

}
alert("Has adivinado el número");