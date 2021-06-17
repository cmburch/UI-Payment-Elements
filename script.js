console.log('hello!');

function onCardNumberChange() {
  let currentValue = document.getElementById('card-number').innerHTML;
  var x = document.getElementsByName('cardnumber')[0].value;
  var newval = '';
  console.log(x.length);

  document.getElementById('card-number').innerHTML = x;
  if (x.length % 4 == 0) {
    for (var i = 0; i < x.length; i++) {
      if (i % 4 == 0 && i > 0) newval = newval.concat('&nbsp');
      newval = newval.concat(x[i]);
    }
    document.getElementById('card-number').innerHTML = newval;
    console.log(newval);
  }
}

function onCardHoldeChange() {
  var x = document.getElementsByName('cardholder')[0].value;
  var newval = '';
  console.log(x.length);

  document.getElementById('cardholder').innerHTML = x;
}

function onCvcNumberChange() {
  var x = document.getElementsByName('cvc')[0].value;
  var newval = '';
  console.log(x.length);

  document.getElementById('cardholder').innerHTML = x;
}

// function onCardNumberChange() {
//   let currentValue = document.getElementById("card-number").innerHTML
//   var x = document.getElementById("card-element").value;
//   var newval = '';
//   console.log(x.length)
//   // document.querySelectorAll('.credit-font, .credit-card-number').innerHTML = x;
//     document.getElementById("card-number").innerHTML = x;
//     if(x.length % 4 == 0){
//       // document.getElementById("card-number").innerHTML = currentValue + 99
//       // document.getElementById("card-number").innerHTML += '\xa0';

//       for (var i = 0; i < x.length; i++) {
//         if (i % 4 == 0 && i > 0) newval = newval.concat('&nbsp');
//         newval = newval.concat(x[i]);
//       }
//       document.getElementById("card-number").innerHTML = newval
//       console.log(newval)
//     }
// }

// function formatCreditCard() {
//     var x = document.getElementById("card-number");
//     var index = x.value.lastIndexOf('&nbsp');
//     var test = x.value.substr(index + 1);
//     if (test.length === 4)
//          x.value = x.value + '-';
// }

// document.querySelector('.card-container').addEventListener('click', e => {
//   // e.classList.toggle.toggle('flipped');
//   console.log('flipped',e);
// })

// function cardFlip(){
//   console.log('onload')
//   document.querySelector('.card-container-inner').addEventListener('click', e => {
//     let el = document.getElementById("card-flip");
//     el.classList.toggle('flipped');
//     console.log('flipped', e);
//   })
// }

function cardFlip() {
  console.log('onload');
  let el = document.getElementById('card-flip');
  el.classList.toggle('flipped');
  console.log('flipped');
}

function onload() {
  var isChromium = !!window.chrome;

  if (isChromium) {
    document.getElementById('card-front').style.overflow = 'hidden';
  }
}

onload();

// onload()
