"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Hilfs fn
var fnGetEl = function fnGetEl(param) {
  var sOutput = document.getElementById(param);
  return sOutput;
}; // ----------- x ---------- //


var sOutput1 = fnGetEl('output1');
var sOutput2 = fnGetEl('output2');
var sOutput3 = fnGetEl('output3');
var sOutput4 = fnGetEl('output4');
var sTestString1 = 'Inhalt von sTestString1...';
var sB1 = fnGetEl('b1');

var fnGebeAus1 = function fnGebeAus1() {
  sOutput1.innerHTML = sTestString1;
};

fnGebeAus1();

var fnGebeAus2 = function fnGebeAus2() {
  sOutput2.innerHTML = sTestString1;
};

sB1.addEventListener('click', fnGebeAus2); // ------ JS Classes ------ //
// ----- Basic Aufbau ----- //

var ClassName = function ClassName() {
  _classCallCheck(this, ClassName);
}; // -------- Bsp. 1 -------- //


var Pstl =
/*#__PURE__*/
function () {
  function Pstl(name, clbr, year) {
    _classCallCheck(this, Pstl);

    this.name = name;
    this.clbr = clbr;
    this.year = year;
  } // -- Bsp.2, mit Methode -- //


  _createClass(Pstl, [{
    key: "fnAge",
    value: function fnAge() {
      var sDate = new Date();
      return sDate.getFullYear() - this.year;
    }
  }]);

  return Pstl;
}();

var sPstl1 = new Pstl('M9', '9mm', 1990);
console.log(sPstl1); // Nur alleine kann das Obj. dargestellt werden

console.log("Ausgabe Bsp.1: " + sPstl1.name + " " + sPstl1.clbr);
console.log("Ausgabe Bsp.2, age: " + sPstl1.fnAge());

var fnOutput3 = function fnOutput3() {
  sOutput3.innerHTML = sPstl1; // Wird nicht mit innerHTML ausgegeben

  sOutput3.innerHTML = "Ausgabe Bsp.1: " + sPstl1.name + " " + sPstl1.clbr;
  sOutput4.innerHTML = "Ausgabe Bsp.2, age: " + sPstl1.fnAge();
};

fnOutput3();