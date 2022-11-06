const precioBase = 200;

function calcularTotal(){
    var cant = document.getElementById("cant").value;
    if (cant == ""){
        return
    } /* Si no se ingresa cantidad no hace modificaciones en el total */
    cant = parseInt(cant);

    var tipo = document.getElementById("categoria").value;

    var total = cant * precioBase;

    switch (tipo) {
        case "Estudiante":
            total = total - total * 0.8;
            break;
        case "Trainee":
            total = total - total * 0.5;
            break;
        case "Junior":
            total = total - total * 0.15;
            break;
    }

    document.getElementById("textoTotal").value= 'Total a pagar: $'+total;
}