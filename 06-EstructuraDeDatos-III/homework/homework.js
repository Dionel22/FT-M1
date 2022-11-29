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
   this.left = null;
   this.right = null;
} 
BinarySearchTree.prototype.insert = function (value) {
   let index = new BinarySearchTree(value);// creamos la instacia en code
   if(value < this.value){// preguntamos si el valor es menor a 20
     if(this.left){
      this.left.insert(value)
     }else{
      this.left = index
       return value;  
     }
   }
   if(value > this.value){
     if(this.right){
      this.right.insert(value)
        }else{
        this.right = index
        return value;
     }       
   }
   return false
  };
  
  BinarySearchTree.prototype.size = function () {
   if(!this.left && !this.right)return 1;
   if(this.left && this.right)return this.left.size() + this.right.size() + 1;
   if(this.left)return 1 + this.left.size();
   if(this.right)return 1 + this.right.size();
 };

BinarySearchTree.prototype.contains = function (data) {
   if(data === this.value)return true;
     if(data < this.value){
        if(!this.left){
         return false;
        }
        return this.left.contains(data);
     }
     if(!this.right){
      return false;
     }
     return this.right.contains(data);
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, orden = "in-order") {
  if(orden === "pre-order"){
    cb(this.value);
   if(this.left) this.left.depthFirstForEach(cb, orden);
   if(this.right) this.right.depthFirstForEach(cb, orden);
  } else{ 
  
    if(orden === "in-order" || orden === undefined){ 
    if(this.left) {this.left.depthFirstForEach(cb, orden);}
    cb(this.value);
    if(this.right){ this.right.depthFirstForEach(cb, orden);}
    }

    if(orden === "post-order"){
       if(this.left) this.left.depthFirstForEach(cb, orden);
       if(this.right) this.right.depthFirstForEach(cb, orden);
       cb(this.value);
       }
     }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  cb(this.value)
  if(this.left){
    array.push(this.left);
  }
  if(this.right){
    array.push(this.right);
  }
  if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array)
  }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
