// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// [‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]


let ciudads = [];
let ciudad;

while (true) {
  ciudad = prompt("Ingresa nombre de ciudades");
  if (ciudad === null) break;

  ciudad = ciudad.trim();
  if (ciudad !== "") {
    ciudads.push(ciudad);
  }
}



// longitud
document.write(`<p> Longitud del arreglo: ${ciudads.length} </p>`);

//  Mostrar primera, tercera y última ciudad
document.write( `<p> ${ciudads[0]} es la primera ciudad </p>`);
document.write(`<p> ${ciudads[2]} es la tercera ciudad </p>`);
document.write(`<p> ${ciudads[ciudads.length - 1]} es la ultima ciudad </p>`);

//  agregar París al final
ciudads.push("Paris");
document.write(`<p> se agrego a Paris ,ahora son : ${ciudads}</p>`);

//  Mostrar segunda ciudad
document.write(`<p> ${ciudads[1]} es la segunda ciudad</p>`);

//  Sustituir segunda ciudad por Barcelona
ciudads[1] = "Barcelona";
document.write(`<p> se modifica la segunda posicion , ahora ${ciudads[1]} esta en el segundo lugar </p>`);

//  arreglo final
document.write(`<p> Arreglo final de ${ciudads}</p>`);