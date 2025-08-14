// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function ingreseNumero(num) {
  if (num % 2 === 0) {
    return `el numero ${num} es par`;
  } else {
    return `el numero ${num} es impar`;
  }
}

// Ejemplo de uso
let resultado = ingreseNumero(7);
console.log(resultado);
