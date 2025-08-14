// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

let ingreseNumero = 44+prompt("ingrese un numero");

const tabla = (ingreseNumeronumero) => {
    
    for(let i=1 ; i <= 10 ; i++)
        {
    document.write(` <p> ${ingreseNumero} * ${i} : ${ingreseNumero * i}</p>`);
           


    }
}
tabla(ingreseNumero);