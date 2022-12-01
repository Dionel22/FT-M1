'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let arr = []
  if(array.length < 1) {
    return []
  }
    var left = []
    var right = []
    var pivot = array[0];
  for (let i = 1; i < array.length; i++) {
      if(array[i] < pivot){
        left.push(array[i]);
      }else{
        right.push(array[i]);  
      } 
  } 
  return arr.concat(quickSort(left), pivot, quickSort(right));
 
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if(array.length <= 1){
    return array;
  }
  var medio = Math.floor(array.length / 2);
  var left = array.slice(0, medio)
  var right = array.slice(medio)

  return merge(mergeSort(left), mergeSort(right) )
}

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if(left[0] < right[0]){
      arr.push(left.shift());
    }else{
      arr.push(right.shift());
    }
    
  }
  return arr.concat(left.slice()).concat(right.slice());
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
