'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {// clase
  this.value = value;
  this.left = null;// referencia izquierda
  this.right = null;//  referencia derecha
} 

BinarySearchTree.prototype.insert = function (data) {
  //creamos una instancia 
  let valor = new BinarySearchTree(data);
    if(data < this.value){// preguntamos si data es menor que el this.value
      if(this.left){// preguntamos si ahi un valor en this.left hasta que salga null
        this.left.insert(data);//usamos la recursion para buscar en el siguiente this.left si es null
      }else{
         this.left = valor;// guardamos el valor en this.left
      }
    }
    if(data >= this.value){// preguntamos si data es mayor que el this.value
    if(this.right){//preguntamos si ahi un valor en this.right hasta que salga null
      this.right.insert(data);//usamos la recursion para buscar en el siguiente this.right si es null
    }else{
     this.right = valor;// guardamos el valor en this.right
    }
   }
 };

 BinarySearchTree.prototype.size = function () {
  if(this.left === null && this.right=== null){return 1}// preguntamos si es null retorno 1
  if(this.left && this.right){return 1 + this.left.size() + this.right.size()}// preguntamos si ahi valor lo sumamos 1 de lado left y ringt y usamos la recurcion
  if(!this.left){return 1 + this.right.size()}// preguntamos si ahi no ahi nada en left lo sumamos 1 en right
  if(!this.right){return 1 +this.left.size() }// preguntamos si ahi no ahi nada en ringht lo sumamos 1 en left
};

BinarySearchTree.prototype.contains = function (data) {
  if(data === this.value)return true;
  if(data >= this.value){
   if(!this.right){return false;}
   return this.right.contains(data);
  }else{     
    if(!this.left){return false;}    
    return this.left.contains(data);
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, orden) {
  //in orden
  if(orden === undefined || orden === "in-order"){
      this.left && this.left.depthFirstForEach(cb, orden);
  cb(this.value);  
  this.right && this.right.depthFirstForEach(cb, orden);
  }else if(orden === "post-order"){
    //post orden
  this.left && this.left.depthFirstForEach(cb, orden);
  this.right && this.right.depthFirstForEach(cb, orden);
  cb(this.value);
  }else{
    //pre orden
  cb(this.value); 
  this.left && this.left.depthFirstForEach(cb, orden);
  this.right && this.right.depthFirstForEach(cb, orden);
  }

};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {//aaray guarda los datos si perdelo por la recucividad
 
  if(this.left){
      array.push(this.left);
  }
  if (this.right) {
      array.push(this.right);
  } cb(this.value);
  if(array.length > 0){
      array.shift().breadthFirstForEach(cb, array);// saca el primero ojecto
  }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
