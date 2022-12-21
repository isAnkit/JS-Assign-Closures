// Print Output Ques 6

var a = 12;
(function () {
  alert(a);
})();

// Ques 7

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();