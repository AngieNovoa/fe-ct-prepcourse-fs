function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  let esEntero = false;
  if(typeof numero === 'number') {
    esEntero = numero % 2 === 0
  };
  return esEntero;
}

module.exports = esNumeroEntero;