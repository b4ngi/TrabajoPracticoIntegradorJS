function calcularTotal(){
    let cant = document.getElementById("cant").value;
    if (cant == ""){
        borrar();
        return
    } /* Si no se ingresa cantidad no hace modificaciones */
    cant = parseInt(cant);

    let tipo = document.getElementById("sel1").value;

    let total = cant * 200;

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

    document.getElementById("textoTotal").innerHTML = total;
}

function borrar(){
    document.getElementById("textoTotal").innerHTML = "";
    document.getElementById("cant").innerHTML = "0"; //no funca
}