let hermanos = prompt('Indica un numero de hermanos');
let cant = prompt('Indica una cantidad');
let descuento
if (hermanos >= 3) {
    descuento = cant - (cant * 0.15)
    alert('la cantidad se queda en ' + descuento);
}
else if (hermanos < 3) {
    descuento = cant - (cant * 0.05)
    alert('la cantidad se queda en ' + descuento);
}
else if (hermanos == 0) {

    alert('la cantidad se queda en ' + cant);
}