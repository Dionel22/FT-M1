x = 1;// no tiene hoistyn tira error / hoistin funciona solo con var
var a = 5;//
var b = 10;//
var c = function (a, b, c) {
    //
    //var a = 8; var b = 9; var c = 10
   var x = 10;//
   console.log(x);//10
   console.log(a);//8
   var f = function (a, b, c) {
      b = a;// b= 8
      console.log(b);// 8
      b = c;// b = 10
      var x = 5;
   };
   f(a, b, c);
   console.log(b);//9
};
c(8, 9, 10);
console.log(b);//10
console.log(x);//1

//-----------------

// var bar; Hoisting
console.log(bar);// undefined
console.log(baz);// 
foo();
function foo() {
   console.log('Hola!');
}
// "hola"
var bar = 1;
baz = 2; // no fue declarada con var

//-----------------


var instructor = 'Tony';//undefiend
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);//"franco"

//-----------------------------

var instructor = 'Tony';
console.log(instructor);// "tony"
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();// IIFE LA CREO Y LA EJECUTO //
console.log(instructor);// "tony"

//----------------------------

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);// "The flash"
   console.log(pm);//"Reverse Flash"
}
console.log(instructor);//"The Flash"
console.log(pm);//Franco

//--------------------------


console.log(6 / "3");// 2
// / - *
console.log("2" * "3");//6
console.log(4 + 5 + "px");// 9 + "px" = "9px"
console.log("$" + 4 + 5);//"$4" + 5 = "$45"
console.log("4" - 2);//2
console.log("4px" - 2);// NaN
console.log(7 / 0);// infinity
console.log({}[0])// undefined
console.log(parseInt("09"));//9
console.log(5 && 2);// 2
console.log(2 && 5);// 5
console.log(5 || 0);// 5
console.log(0 || 5);// 5
console.log([3]+[3]-[10]);// 23 concadena lo combierte en estring de lo desconvierte
console.log(3>2>1);// false
console.log([] == ![]);// true
        //  [] == false
        //  "" ==  0
        //  0  ==  0  true

//-----------------------

function test() {
    //var a;
    console.log(a);// undefiend
    console.log(foo());// 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();

 //---------

 var snack = 'Meow Mix';

function getFood(food) {
    //var snack; no entra al if y da undefiend
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);

//------------

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;// objeto this ase relacion con prop
      },
   },
};

console.log(obj.prop.getFullname());// "Aurelio de rosa"

var test = obj.prop.getFullname;// this --> windows

console.log(test());// undefiend

//-----------------

function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing();// 1 4 3 2



