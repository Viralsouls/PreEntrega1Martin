function bookFlight() {
    let name = prompt("Hola, ¿cómo te llamas?");
    console.log("Nombre ingresado: " + name);

    if(!validateName(name)) {
        alert("Nombre inválido, por favor ingresa tu nombre.");
        return;
    }

    let destination = prompt("Hola " + name + ". ¿A qué lugar quieres viajar hoy?");
    console.log("Destino ingresado: " + destination);

    if(!validateName(destination)){
        alert("Destino inválido.");
        return;
    }
    
    let date = prompt("¿Qué día deseas viajar? (Formato AAAA-MM-DD)");
    console.log("Fecha ingresada: " + date);

    if(!validateDate(date)){
        alert("Fecha inválida.");
        return;
    }

    let amount = prompt("¿Cuántos tiquetes deseas comprar?");
    console.log("Cantidad de tiquetes seleccionados: " + amount);

    if(!validateAmount(amount)) {
        alert("Cantidad inválida.");
        return;
    }

    console.log("Vuelos confirmados: ");
    console.log("Nombre: " + name);
    console.log("Destino: " + destination);
    console.log("Fecha: " + date);
    console.log("Cantidad de tiquetes: " + amount);
    
    alert("Tiquetes confirmados exitosamente!\n" +
        "Nombre: " + name + "\n" +
        "Destino: " + destination + "\n" +
        "Fecha: " + date + "\n" +
        "Cantidad de tiquetes: " + amount);
    
    let anotherBooking = prompt("¿Te gustaria comprar otros tiquetes? (Si/No)");
    console.log("Seleccionaste: " + anotherBooking);

    while(anotherBooking !== null && anotherBooking.toLowerCase() === "si"){
        console.log("Agendando nuevos tiquetes...");
        bookFlight();

        break;
    }

    console.log("Gracias por comprar tus tiquetes con nosotros!");
    alert("Gracias por comprar tus tiquetes con nosotros!");

}

bookFlight();