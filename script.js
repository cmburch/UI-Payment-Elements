console.log('hello!')

function onCardNumberChange() {
  let currentValue = document.getElementById("card-number").innerHTML
  var x = document.getElementById("card-element").value;
  console.log(x.length)
  // document.querySelectorAll('.credit-font, .credit-card-number').innerHTML = x;
    document.getElementById("card-number").innerHTML = x;
    if(x.length % 4 == 0){
      // document.getElementById("card-number").innerHTML = currentValue + 99
      document.getElementById("card-number").innerHTML += '';
    }
}