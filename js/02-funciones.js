// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// [‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

let ciudades = [];
    let ciudad;

    // Solicita ciudades hasta que el usuario cancele
    while (true) {
      ciudad = prompt("Ingrese el nombre de una ciudad:");
      if (ciudad === null) break;
      ciudades.push(ciudad);
    }

    // Muestra el arreglo completo en consola
    console.log("Ciudades ingresadas:", ciudades);

    // Mostrar longitud del arreglo
    console.log("Longitud del arreglo:", ciudades.length);

    // Mostrar primera, tercera y última ciudad en el documento
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += `<p>Primera ciudad: ${ciudades[0]}</p>`;
    resultado.innerHTML += `<p>Tercera ciudad: ${ciudades[2]}</p>`;
    resultado.innerHTML += `<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`;

    // Añadir París al final
    ciudades.push("París");
    console.log("Se añadió París:", ciudades);

    // Mostrar segunda ciudad
    resultado.innerHTML += `<p>Segunda ciudad: ${ciudades[1]}</p>`;

    // Sustituir segunda ciudad por Barcelona
    ciudades[1] = "Barcelona";
    console.log("Segunda ciudad sustituida por Barcelona:", ciudades);