let buttons = document.querySelectorAll('.button');

console.log(buttons);

buttons.forEach((btn) => {
    // adding a event listener so that the event happens is listened by someone so eventListener is used
  btn.addEventListener('click', (eve) => {
    console.log(eve);
    console.log(eve.target); // the target is the object on which the event is happened
    let ch = eve.target.id;
    switch (ch) {
      case 'grey':
        document.body.style.backgroundColor = 'grey';
        break;
      case 'blue':
        document.body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        document.body.style.backgroundColor = 'yellow';
        break;
      case 'white':
        document.body.style.backgroundColor = 'white';
        break;
    }
  });
});
