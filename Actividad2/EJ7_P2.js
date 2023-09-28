let num;
let total = 0;
let parar = false;
while (!parar) {
    num = parseInt(prompt("Introduce un número"));


    if (num === 0) {
        parar = true; 
    }

    total += num; 
}

alert("El total de la suma es " + total);