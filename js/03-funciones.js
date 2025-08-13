// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.


// Inicializamos un array para contar las apariciones de cada suma (2 a 12)
let apariciones = Array(13).fill(0); // Índices del 2 al 12

// Función para lanzar un dado (número aleatorio entre 1 y 6)
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Repetimos el lanzamiento 50 veces
for (let i = 0; i < 50; i++) {
  let dado1 = lanzarDado();
  let dado2 = lanzarDado();
  let suma = dado1 + dado2;
  apariciones[suma]++;
}

// Mostramos los resultados
for (let i = 2; i <= 12; i++) {
  console.log(`Suma ${i}: ${apariciones[i]} apariciones`);
}
