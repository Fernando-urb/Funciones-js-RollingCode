// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

const meses = [
      "Enero", "Febrero", "Marzo", "Abril",
      "Mayo", "Junio", "Julio", "Agosto",
      "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Mostrar los meses en forma de lista
    const lista = document.getElementById("listaMeses");
    meses.forEach(mes => {
      let item = document.createElement("li");
      item.textContent = mes;
      lista.appendChild(item);
    });