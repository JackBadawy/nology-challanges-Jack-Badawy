/* const x = 5;

if (x) {
  console.log("x is a truthy value");
} else {
  console.log("x is a falsy value");
} */

//challange
/* const num = 4;

if (num % 2 === 1) {
  console.log("is odd");
} else {
  console.log("is even");
} */

//challange2
/* const x = 4;
const y = 3;

if (x > y) {
  console.log("x is greater than y");
} else if (x === y) {
  console.log("x is equal to y");
} else {
  console.log("x is smaller than y");
} */

//challange3

/* let userInput;

function input(inp) {
  userInput = inp;
  if (typeof userInput === "number" && !isNaN(userInput)) {
    console.log(userInput ** 2);
  } else if (typeof userInput === "string") {
    console.log(userInput);
  } else {
    console.log("invalid input");
  }
} */

/* const errorCode = 3;

switch (errorCode) {
  case 1:
    console.log("we could not parse");
    break;

  case 2:
    console.log("we could not parse");
    break;

  case 3:
    console.log("we could not parse");
    break;

  default:
    console.log("unknown error");
}

const input = "e";

switch (input) {
  case "e":
  case "E":
    console.log("exit program");
}
 */

//challenge 4 switchs

//Create a variable called day
const day = 1;
// The switch will be given a number and return the matching days of the week
// e.g. if day = 2, the switch should print Today is Tuesday in the console.
// Your switch block should also handle numbers out of range
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
  default:
    console.log("invalid Day");
}

//Create two variables parent1 and parent2
//eye colors: 0 = brown, 1 = green, 2 = blue
const parent1 = 1;
const parent2 = 2;
let childEye;
let childEyeGenerator;
// Given the eye colour of each parent, it should console log the probability of
// their child having different eye colours, for example: Your eye colours are brown
// and blue, the chances of your child having blue eyes is --%, brown is --% and green
// is --%
switch (`${parent1}${parent2}`) {
  case "00":
    console.log(
      "your eye colors are both brown, the chances of your child having brown eyes is 75%, green is 18.75%, blue is 6.25%"
    );
    childEyeGenerator = Math.floor(Math.random() * 10);
    if (childEyeGenerator <= 7) {
      childEye = 0;
    } else if (childEyeGenerator === 8 || childEyeGenerator === 9) {
      childEye = 1;
    } else {
      childEye = 2;
    }

    break;
  case "10":
  case "01":
    console.log(
      "your eye colors are brown and green, the chances of your child having brown eyes is 50%, green is 37.5%, blue is 12.5%"
    );
    childEyeGenerator = Math.floor(Math.random() * 10);
    if (childEyeGenerator <= 5) {
      childEye = 0;
    } else if (childEyeGenerator <= 9 && childEyeGenerator > 5) {
      childEye = 1;
    } else {
      childEye = 2;
    }
    break;
  case "20":
  case "02":
    console.log(
      "your eye colors are brown and blue, the chances of your child having brown eyes is 50%, green is 0%, blue is 50%"
    );
    childEyeGenerator = Math.floor(Math.random() * 10);
    if (childEyeGenerator <= 5) {
      childEye = 0;
    } else {
      childEye = 2;
    }
    break;
  case "11":
    console.log(
      "your eye colors are both green, the chances of your child having brown eyes are <1%, green is 75%, blue is 25%"
    );
    childEyeGenerator = Math.floor(Math.random() * 10);
    if (childEyeGenerator <= 7) {
      childEye = 1;
    } else {
      childEye = 2;
    }
    break;
  case "12":
  case "21":
    console.log(
      "your eye colors are green and blue, the chances of your child having brown eyes is 0%, green is 50%, blue is 50%"
    );
    childEyeGenerator = Math.floor(Math.random() * 10);
    if (childEyeGenerator <= 5) {
      childEye = 1;
    } else {
      childEye = 2;
    }
    break;
  case "22":
    console.log(
      "your eye colors are both blue, the chances of your child having brown eyes is 0%, green is 1%, blue is 99%"
    );
    childEye = 2;
    break;
  default:
    console.log("invalid input");
}

switch (childEye) {
  case 0:
    console.log("your childs eye's are brown, my favorite color!");
    break;
  case 1:
    console.log("your childs eye's are green");
    break;
  case 2:
    console.log("your childs eye's are blue");
    break;
}
