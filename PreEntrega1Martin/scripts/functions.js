// Validacion de fecha
function validateDate(date) {
    let validDate = Date.parse(date);
    console.log("Validando fecha: " + date);
    if (isNaN(validDate)) {
        console.log("Fecha inválida.");
        return false;
    }
    console.log("Fecha válida.");
        return true;
}

// Validación de nombre nulo
function validateName(name) {
    console.log("Validando nombre: " + name);
    if (name === null || name === "") {
        console.log("Nombre inválido.");
        return false;
    }
    console.log("Nombre válido.");
    return true;
}

// Validación cantidad de tiquetes
function validateAmount(amount) {
    console.log("Validando cantidad: " + amount);
    if (isNaN(amount) || amount <-0) {
        console.log("Cantidad inválida.");
        return false;
    }
    console.log("Cantidad válida.");
    return true;
}