'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/


function LinkedList() {//tenemos la clase lista que tiene una (cabeza con valor null) y un (contador en 0)
  this.length = 0; 
  this.head = null;
}

function Node(value) {//tenemos la clase node con un valor  y  un next que es null
  this.value = value;
  this.next = null;
}

//Metodo add, remove y search

LinkedList.prototype.add = function (data) {
  var node1 = new Node(data);// creamos la intancia de la clase Node en node1
  var current = this.head;//creamos una variable temporal donde guardaremos el valor actual de node
  if(!current){//comprobamos que nuestra lista no este vacia
    this.head = node1;// si la lista esta vacia, guardamos en la cabeza el node
    this.length++;// aumentamos el contador 1 por cada lista que agregamos
    return node1;
  }
  
  while (current.next) {// recorremos el current hasta encontra una cabeza que este en null
    current = current.next;//actualizamos nuestra variable con el siguiente node
  }
    current.next = node1;// cuardamos node1 en next 
    this.length++;
}

LinkedList.prototype.remove = function () {
var current = this.head;// creamos una variable temporal donde guardaremos el valor actual de lista
if(!current){//comprobamos que nuestra lista no este vacia
  return this.head = null;// si la lista no esta vacia, guardamos en la cabeza con el valor null
}
  if(!current.next){// recorremos el current hasta encontra una cabeza que no este vacia
    this.head = null;// guardamos en la cabeza con el valor null
    console.log(this.length--);//restamos el contador
    return current.value;// nos muestra el valor null
  }
 
   while(current.next.next){// recorremos el current hasta encontra una cabeza que este en null
     current = current.next;//actualizamos nuestra variable con el siguiente node
      console.log(current);
   }    
     var node2 = current.next.value; 
      current.next = null;
      console.log(this.length--);
      return node2;
}

LinkedList.prototype.search = function (input) {
  var current = this.head;
  if(!current){
    this.head = null;
  }
  while(current){
    if(typeof input === "function"){
        if(input(current.value)=== true){
            return current.value;
        }
    }if(input === current.value){
        return current.value;
    }
    current = current.next;
  }
  return null;
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (input) {
  var suma = 0; // declaramos un contador
  for(let i = 0; i < input.length;i++){//recorre el string
      suma = suma + input.charCodeAt(i);// suma las letra del string con el metodo charCodeAt
  }
  return suma % this.numBuckets;// le sacamos el resto para que se guarde
}

// Metodo

HashTable.prototype.set = function(key, value){
 // preguntamos si key es un string, si no es que marque error 
  if(typeof key !== "string"){
    throw new TypeError("Keys must be strings")
  }
  var indice = this.hash(key);// creamos una variable para guardar el valor
 if(this.buckets[indice] === undefined){// si en buckets es undefined 
    this.buckets[indice] = {};// guardo un objeto
 }
 return this.buckets[indice][key] = value; // guardo el valor y lo retorno
};

HashTable.prototype.get = function(key){
  // creamos una instacia de hash con la variable index
  var index = this.hash(key);
  // retornamos el valor de la key
  return this.buckets[index][key];
};


HashTable.prototype.hasKey = function(key){
    // creamos una instacia de hash con la variable index
  var index = this.hash(key);
  //retornamos true si en key esta el valor 
  return this.buckets[index].hasOwnProperty(key);
};




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
