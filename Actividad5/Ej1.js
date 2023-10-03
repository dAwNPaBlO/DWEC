var nombre = prompt("Ingresa tu nombre:");
var apellidos = prompt("Ingresa tus apellidos:");
var salario = parseFloat(prompt("Ingresa tu salario (€):"));
var edad = parseInt(prompt("Ingresa tu edad:"));


if (salario >= 1000 && salario <= 2000) {
    if (edad > 45) {
        salario *= 1.03;
    } else {
        salario *= 1.10;
    }
} else if (salario < 1000) {
    if (edad < 30) {
        salario = 1100;
    } else if (edad >= 30 && edad <= 45) {
        salario *= 1.03;
    } else if (edad > 45) {
        salario *= 1.15;
    }
}

alert("Nombre: " + nombre + " " + apellidos + "\n" + "Edad: " + edad + "\n" + "Salario: " + salario.toFixed(2) + " €");
