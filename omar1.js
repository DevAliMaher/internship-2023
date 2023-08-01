let a = 3;
var b = 4;

function test(a, b) {
  console.log(a * b);
  var b = 8;
  console.log(a * b);
  let a = 6;
  console.log(a * b);
}
