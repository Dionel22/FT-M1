'use strict';
// No usar parseInt para String 
function BinarioADecimal(num) {
   var decimal = num.split("").reverse();
   var total = 0;
   for (let i = 0; i < decimal.length; i++) {
      total = total + decimal[i] * 2 ** i;
   }
   return total;
}

function DecimalABinario(num) {
   var binario = '';
   while (num >= 1) {
      binario = num % 2 + binario;// lo concatena "1 <- 0 <- 0 <-1"
      num = Math.floor(num / 2);
   }
   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
