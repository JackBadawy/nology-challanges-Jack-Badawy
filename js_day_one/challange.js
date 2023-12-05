//moon orbits

function moonOrbits(days) {
  const moonOrbitsNumber = days / 27;
  console.log(moonOrbitsNumber);
}

//circle area and Perimeter
function circleArea(radius) {
  const circleAreaNumber = Math.PI * (radius * radius);
  console.log(`the area of your circle is ${circleAreaNumber}`);
}

function circlePerimeter(radius) {
  const circlePerimeterNumber = 2 * Math.PI * radius;
  console.log(`the area of your circle is ${circlePerimeterNumber}`);
}

//years to days and seconds

function ageInDays(age) {
  const ageInDaysNumber = age * 365;
  console.log(`your age in days is ${ageInDaysNumber}`);
}

function ageInSeconds(age) {
  const ageInSecondsNumber = age * 31536000;
  console.log(`your age in seconds is ${ageInSecondsNumber}`);
}

// remainder from two numbers

function calculateRemainder(num1, num2) {
  return num1 % num2;
}

// basketball point calculation
function calculateBasketBallScore(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}

//less than 100?
function lessThanOneHundred(num1, num2) {
  if (num1 + num2 < 100) {
    return true;
  } else {
    return false;
  }
}
