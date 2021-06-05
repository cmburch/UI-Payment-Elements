console.log('hello!')

function onCardNumberChange() {
  let currentValue = document.getElementById("card-number").innerHTML
  var x = document.getElementById("card-element").value;
  var newval = '';
  console.log(x.length)
  // document.querySelectorAll('.credit-font, .credit-card-number').innerHTML = x;
    document.getElementById("card-number").innerHTML = x;
    if(x.length % 4 == 0){
      // document.getElementById("card-number").innerHTML = currentValue + 99
      // document.getElementById("card-number").innerHTML += '\xa0';

      for (var i = 0; i < x.length; i++) {
        if (i % 4 == 0 && i > 0) newval = newval.concat('&nbsp');
        newval = newval.concat(x[i]);
      }
      document.getElementById("card-number").innerHTML = newval
      console.log(newval)
    }
}

// function formatCreditCard() {
//     var x = document.getElementById("card-number");
//     var index = x.value.lastIndexOf('&nbsp');
//     var test = x.value.substr(index + 1);
//     if (test.length === 4)
//          x.value = x.value + '-';
// }

function splitToChunks(items, chunkSize = 4) {
  const result = [];
  for (let i = 0; i < items.length; i+= chunkSize) {
    result.push(items.slice(i, i + chunkSize));
  }
  return result;
}