// let a = 3;
// var b = 4;

// function test(a, b) {
//   console.log(a * b);
//   var b = 8;
//   console.log(a * b);
//   let a = 6;
//   console.log(a * b);
  
// }

const myList = document.getElementById('myList');
myList.addEventListener('click',function(e){
  // console.log(e);
  const  target = e.target;
  if (target.matches("li")){
    target.style.backgroundColor = 'red';

  }
});

  // add li
  const newli = document.createElement("li");
  newli.textContent = "dcode";
  myList.appendChild(newli);
