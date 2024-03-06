function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if(typeof fecha === 'string' ) return false;
  const esFechaValida = isNaN(Number(new Date(fecha.getDate())));
  return !esFechaValida;
}

module.exports = esFechaValida;