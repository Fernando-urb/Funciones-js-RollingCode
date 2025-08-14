// olicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)


function perimetroRectangulo(a, b) {
  return 2 * (a + b);
}


let lado1 = parseFloat(prompt("ingrese un valor").trim());
let lado2 = parseFloat(prompt("ingrese otro valor").trim());


let perimetro = perimetroRectangulo(lado1, lado2);
alert("el perimetro del rectangulo es  " + perimetro);
