// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.



let apariciones =[0,0,0,0,0,0,0,0,0,0,0,0,0]; 


const tirarDado = () => {
  return Math.floor(Math.random() * 6) + 1;
}

for (let i = 0; i < 50; i++) {
  let dado1 = tirarDado();
  let dado2 = tirarDado();
  let suma = dado1 + dado2;
  apariciones[suma]++;
}

for (let j = 2; j <= 12; j++) {
  console.log(`Suma ${j}: ${apariciones[j]} apariciones`);
}
