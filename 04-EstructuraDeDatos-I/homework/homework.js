'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.
​
nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1
​
nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.
​
Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
​
​
Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

// EJERCICIO 1
function nFactorial(n) {

   if(n <= 1){ // caso base
      return n;
   }
  return n * nFactorial(n -1); // caso recursivo
}

// EJERCICIO 2
function nFibonacci(n) {
   // fib 0 = 0
   // fib 1 = 1
   // fib 2 = fib(1) + fib(0) = 1 + 0 = 1
   // fib 3 = fib(2) + fib(1) = 
   // fib(2) = fib(1) + fib(0) = 1 + 0 = 1
   // fib(n) = fib(n -1) + fib(n -2)

   if(n === 0){ // caso base
      return n;
   } else  if(n === 1){ // caso base
      return n;
   }

   return nFibonacci(n -2) + nFibonacci(n -1); // caso recursivo
}
/* 
   nFibonacci(1)
   nFibonacci(0)
   nFibonacci(3) 
   nFibonacci(2) <-- nFibonacci(0) + nFibonacci(1)
   nFibonacci(4) --> nFibonacci(2) + nFibonacci(3) en pausa
*/


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.
​
Pueden utilizar class o función constructora.
*/

// EJERCICIO 3
function Queue() {
   this.queue = [];
}
// metodo quen son una function / molde
Queue.prototype.enqueue = function (x) { // queue es una instancia
   return this.queue.push(x);
}

Queue.prototype.dequeue = function () {
   return this.queue.shift();
}

Queue.prototype.size = function () {
   return this.queue.length;
}

// const ds = new Queue() es una intansia


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
