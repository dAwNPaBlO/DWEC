let num = parseInt(prompt('Introduce un numero'));
let res = parseInt(1);
while(num > 0){
    
    res *= num  
    num--;
}
alert('El factorial es: ' + res);