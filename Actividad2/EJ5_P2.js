let num = prompt('introduce un numero');
let cadena
if((num % 2) == 0){
    cadena = 'el numero ' + num + ' es par '
}
else{
    cadena = 'el numero ' + num + ' es impar'
}
if ((num % 3) == 0) {
    cadena += ', es multiplo de 3 '
}
if ((num % 5) == 0) {
    cadena += ', es multiplo de 5 '
}
alert(cadena);
