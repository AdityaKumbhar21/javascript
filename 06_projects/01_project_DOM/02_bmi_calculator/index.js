let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // the value we get is in the form of string
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let results = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    results.innerHTML = `Please enter a valid height, height is ${height}`;
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight, weight is ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi <= 18.6) {
      results.innerHTML = `<span> Your BMI is ${bmi} You are <em>Under<\em> weight</span>`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span> Your BMI is ${bmi} You are <em>Normal<\em> Weight</span>`;
    } else {
      results.innerHTML = `<span> Your BMI is ${bmi} You are <em>Over<\em> weight</span>`;
    }
  }
});
