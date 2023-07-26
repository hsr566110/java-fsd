function main () {
  var height = parseFloat(document.getElementById('Height').value);
  var weight = parseFloat(document.getElementById('Weight').value);

  var imc = weight / (height/100)**2;
  imc = imc.toFixed(2);

  if (imc > 0 && imc <= 15) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>very severely underweight </span><BR>RECOMMENDED DIETS TO TAKE AND INSTRUCTIONS</br><br>1.Green vegetables rich in protein and sprouts<br>2.Carbohydrates with sugar<br>3.Saturated and unsaturated fats<br>4.Protein bars(170g/day)<br>5.Take Protein 4 times of your weight<br>6.Save 3000 calories daily<br>7. Stay mentally fit and donot go for workouts.';
  } else if (imc > 15 && imc <= 16) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>severely underweight</span><BR>RECOMMENDED DIETS TO TAKE AND INSTRUCTIONS</br><br>1.Green vegetables rich in protein and sprouts<br>2.Carbohydrates with sugar<br>3.Saturated and unsaturated fats<br>4.Protein bars(110g/day)<br>5.Take Protein 3 times of your weight<br>6.Save 2000 calories daily.<br>7. daily streching of body';
  } else if (imc > 16 && imc <= 18.5) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Underweight</span>.<BR>RECOMMENDED DIETS TO TAKE AND INSTRUCTIONS</br><br>1.rich in protein cereals and sprouts<br>2.Carbohydrates with sugar<br>3.Saturated fats<br>4.Protein bars(70g/day)<br>5.Take Protein 2 times of your weight<br>6.Save 1335 calories daily<br>7.Daily exercise for pumping muscles';
  } else if (imc > 18.5 && imc <= 25) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Normal (healthy weight)</span><BR>RECOMMENDED DIETS TO TAKE AND INSTRUCTIONS</BR><br>1.Maintain the stability by eating less sugar n fats<br>2.Daily protein as per your weight<br>3.Regular exercise<br>4.Pre and post Meals<br>5.Maintain 500-1000 calories daily';
  } else if (imc > 25 && imc <= 30) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Overweight</span>.';
  } else if (imc > 30 && imc <= 35) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class I (Moderately obese)</span>.';
  } else if (imc > 35 && imc <= 40) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class II (Severely obese)</span>.';
  } else if (imc > 40 && imc <= 45) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class III (Very severely obese)</span>.';
  } else if (imc > 45 && imc <= 50) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class IV (Morbidly Obese)</span>.';
  } else if (imc > 50 && imc <= 60) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class V (Super Obese)</span>.';
  } else if (imc > 60) {
    document.getElementById('output').innerHTML = 'Your BMI is: ' + imc + '<br>Your weight is <span>Obese Class VI (Hyper Obese)</span>.';
  } else {
    document.getElementById('output').innerHTML = 'Please type valid numbers.';
  }
}