function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  let esNuloOIndefinido = false
  if (valor === undefined || valor === null) {
    esNuloOIndefinido = true;
  }
  return esNuloOIndefinido
}

module.exports = esNuloOIndefinido;