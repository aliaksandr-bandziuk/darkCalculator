'use strict';

let input = document.querySelector('.calculator input'),
   button = document.querySelector('.calculator button');

disable();

function nummber1(){ input.value += '1'; }
function nummber2(){ input.value += '2'; }
function nummber3(){ input.value += '3'; }
function nummber4(){ input.value += '4'; }
function nummber5(){ input.value += '5'; }
function nummber6(){ input.value += '6'; }
function nummber7(){ input.value += '7'; }
function nummber8(){ input.value += '8'; }
function nummber9(){ input.value += '9'; }
function nummber0(){ input.value += '0'; }
function slash(){ input.value += '.'; }
function empty(){
   input.value = '';
   disable();
}
function plus(){ input.value += ' + '; }
function minus(){ input.value += ' - '; }
function times(){ input.value += ' * '; }
function div(){ input.value += ' / '; }
function calculate(){
   if (input.value != 0){
      let total = eval(input.value);
      input.value = total;
   }
}

function enable() {
   for(var i = 1; i < 7; i++) {
      document.getElementById(`disable${i}`).disabled = false;
   }
}

function disable() {
   for(var i = 1; i < 7; i++) {
      document.getElementById(`disable${i}`).disabled = true;
   }
}