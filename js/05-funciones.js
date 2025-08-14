//  Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function texto(palabra) {
  if (palabra === palabra.toUpperCase()) {
    console.log("la palabra esta toda en mayuscula");
  } else if (palabra === palabra.toLowerCase()) {
    console.log("la palabra esta toda en minuscula");
  } else {
    console.log("la palabra contiene minuscula y mayuscula");
  }
}


texto("HOLA");       
texto("hola");       
texto("Hola Mundo"); 