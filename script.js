console.log('hello!')

function onCardNumberChange() {
  var x = document.getElementById("card-element").value;
  console.log(x)
  document.getElementsByClassName("credit-card-number").innerHTML = x;
    document.getElementById("demo").innerHTML = x;
}