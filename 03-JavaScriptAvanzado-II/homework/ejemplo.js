// function saludar( saludo ){
//     return function( nombre ){
//       console.log(saludo + ' ' + nombre);
//     }
//   }
  
//   var saludarHola = saludar('Hola'); // Esto devuelve una función / crea una intancia
//   var saludarH = saludar('chau'); // Esto devuelve una función
  
//   saludarHola('Toni'); // 'Hola Toni'
//   saludarHola('dion'); // 'Hola Toni'

//---------------------------------------

// function incrementa (){
//     var count = 0;
//    return function () {
//         count++;
//         return count;
//     }
// }
// const s = incrementa();
// console.log(s())
// console.log(s())
// console.log(s())


//-----------------------


var creaFuncion = function(){
    var arreglo = [];
  
    for (var i=0; i < 3; i++){
      arreglo.push(
        function(){
          console.log(i);
        }
      )
    }
    return arreglo;
  }
  
  var arr = creaFuncion();
  
  arr[0]() // 3 sale un 3, qué esperaban ustedes??
  arr[1]() // 3
  arr[2]() // 3

