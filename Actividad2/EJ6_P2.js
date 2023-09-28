let num1 = parseInt(prompt('introduce el numero 1'));
let res
let num2 = parseInt(prompt('introduce el numero 2'));
let operacion = prompt('introduce una operacion');
switch (operacion) {
    case '+':
        res = num1 + num2
        break;
    case '-':
        res = num1 - num2
        break;
    case '/':
        res = num1 / num2
        break;
    case '*':
        res = num1 * num2
        break;
    default:
        break;
}
alert('El resultado es: ' + res);