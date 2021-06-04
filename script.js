console.log('hello!')

function onCardNumberChange() {
  var x = document.getElementById("card-element").value;
  console.log(x)
  // document.querySelectorAll('.credit-font, .credit-card-number').innerHTML = x;
    document.getElementById("card-number").innerHTML = x;
}