var num1 = +prompt("Please enter a number:");
if (num1 > 0 && num1 < 1000) alert("OK");
else alert("NOT OK");

var num2 = +prompt("Please enter a number:");
if (num2 / 10000 >= 1) alert("OK");
else alert("NOT OK");

var num3 = prompt("Please enter a string:");
if (num3.length >= 5) alert("OK");
else alert("NOT OK");

var oneWeekExpenses = {
  Sunday: 0,
  Monday: 0,
  Tuesday: 0,
  Wednesday: 0,
  Thursday: 0,
  Friday: 0,
  Seterday: 0,
};
var sum = 0;
for (var day in oneWeekExpenses) {
  oneWeekExpenses[day] = +prompt(
    "Please enter your total expenses for " + day + ":"
  );
  if (oneWeekExpenses[day] < 0) {
    alert("Invalid Number entered, please reload the page to start again");
    break;
  } else sum += oneWeekExpenses[day];
}
console.table(oneWeekExpenses);
alert("Your average expenses for this week are: " + sum / 7 + " new shekels!");

var num = +prompt("Please enter a number:");

switch (true) {
  case num % 5 == 0:
    alert("Five");
    break;
  case num % 2 == 0:
    alert("Even");
    break;
  case num >= 1 && num <= 100:
    alert("Between 1 and 100");
    break;
  case num >= 101 && num <= 1000:
    alert("Between 101 and 1000");
    break;
  default:
    alert("Greater then 1000, not a multiple of five and not even.");
    break;
}

//Ex 6- 1. wrong, 2. right, 3. wrong.

function and(a, b) {
  if (a && b) return true;
  else return false;
}

console.log(and(true, false));
console.log(and(true, true));

function matchHouses(step) {
  if (step == 0) return 0;
  else return step * 5 + 1;
}

console.log(matchHouses(0));
console.log(matchHouses(1));
console.log(matchHouses(4));

function perimeter(l, num) {
  return l.toLowerCase() === "c"
    ? num * 6.28
    : l.toLowerCase() === "s"
    ? num * 4
    : 0;
}

console.log(perimeter("S", 5));
console.log(perimeter("C", 10));
console.log(perimeter("K", 11));

//1. ascii art
function stairs(s) {
  var charsToPrint = "";
  for (var i = 0; i < s + 1; i++) {
    for (var j = 0; j < i; j++) {
      charsToPrint += "$";
    }
    console.log(charsToPrint);
    charsToPrint = "";
  }
}
stairs(7);
//1.1

function tree(height) {
  var spacesCounter = 0;
  for (var i = 0; i < height; i++) {
    spacesCounter = height - i - 1;
    console.log(" ".repeat(spacesCounter).concat("*".repeat(i * 2 + 1)));
    spacesCounter = 0;
  }
  console.log(" ".repeat(height - 1).concat("*"));
}

tree(9);

//1.2
// function drawACircle(radius) {
//   // var spacesCounter = 0;
//   // var charsToPrint = "*";
//   // for (var i = 0; i < Math.floor(radius / 2); i++) {
//   //   spacesCounter = radius - square(i);
//   //   charsToPrint = charsToPrint.repeat((radius + i) ^ 4);
//   //   console.log(" ".repeat(spacesCounter).concat(charsToPrint));
//   //   spacesCounter = 0;
//   // }
//   var str = "";
//   var i = 0;
//   var sp = Math.floor(radius / 2);
//   for (sp; sp--; ) {
//     str += " ".repeat(sp) + "*".repeat(radius + i) + "\n";
//     i += 2;
//   }
//   str += " ".repeat(sp) + "*".repeat(radius * 2 + 1) + "\n";
//   var j = 0;
//   for (let sp = 1; sp < radius; sp++) {
//     str += " ".repeat(sp) + "*".repeat(radius * 2 + 1 - j) + "\n";
//     j -= 2;
//   }
//   console.log(str);

//   // var charsToPrint = "*".repeat(radius * 2 + 1);
//   // console.log(charsToPrint);
//   // for (var i = Math.floor(radius / 2) - 1; i > 0; i--) {
//   //   spacesCounter = radius - i - 2;
//   //   charsToPrint = charsToPrint.repeat(radius + i * 2);
//   //   console.log(" ".repeat(spacesCounter).concat(charsToPrint));
//   //   spacesCounter = 0;
//   // }
// }
// drawACircle(5);

2;
function fizzBuzz() {
  for (var i = 1; i < 101; i++) {
    switch (true) {
      case i % 3 == 0:
        console.log("Fizz");
        break;
      case i % 5 == 0:
        console.log("Buzz");
        break;
      default:
        console.log(i);
        break;
    }
  }
}

fizzBuzz();
