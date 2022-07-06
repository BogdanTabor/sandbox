const fruits = {
  name: "fruits",
  arr: [ 'apple', 'kiwi', 'banana', 'cherry', 'coconut' ]
}
const nums = {
  name: "nums",
  arr: [42, 100, 1, 5, 25, 10],
};

console.log(document.title);

//ObjectMethods
Object.defineProperties(fruits, { cost: { value : [ 20, 30, 40 ] } });
Object.defineProperty(fruits, "name", { enurable: false });
console.log(Object.keys(fruits));
// Object.freeze(fruits);

document.getElementById("file").innerHTML = "HERE WE ARE";

//PROMISE
function displayPromise(arg) {
  document.getElementById("promiseElem").innerHTML = arg;
}

let myPromise = new Promise(function(resolve, reject) {
  let x = 0;
  //some code to execute
  x = 5;
  if (x == 0) {
    resolve(true);
  } else {
    reject (false);
  }
})

function runPromise() {
  myPromise.then(
    function(value) {displayPromise(value);},
    function(error) {displayPromise(error);}
  );
}

//wait load file CALLBACK
function myDisplayer(arg) {
  document.getElementById("file").innerHTML = arg;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "text.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(this.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

//toggle
window.toggleLeft = function() {
  let element = document.getElementById("offcanvas-left");
  element.classList.toggle("hide");
}
window.toggleRight = function() {
  let element = document.getElementById("offcanvas-right");
  element.classList.toggle("hide");
}

//headerClock
const getTime = () => document.getElementById("time")
.textContent = new Date().toLocaleTimeString();
setInterval(getTime, 1000);

setInterval(() => document.title = getTime(), 1000);

//TimeToUSStyle
const TimeToUSStyle = () => document.getElementById("time")
.textContent = new Date().toLocaleTimeString('en-US');
setInterval(getTime, 1000);

//headerDate
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const getDate = () => document.getElementById("date")
.textContent = `${new Date().getDate()}${days[new Date().getDay()]}`;
setInterval(getDate, 1000);

//Sets
const fruitsSet = new Set(fruits.arr);
const fruitsSetElement = document.getElementById("fruitsSetElement");

function showFruitsSet() {
  let text = "";
  for (const entry of fruitsSet.values()) {
    text += entry + " · ";
  }
  fruitsSetElement.innerHTML = text;
}

//Iterable obj
let myNumbers = {};
let obj1Element = document.getElementById("obj1");

myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 2;
      if (n == 16 ) { done = true }
      return {value: n, done: done}
    }
  };
}

let obj1Text = "";
for (const num of myNumbers) {
  obj1Text += num + " "
}

obj1Element.innerHTML = obj1Text;

//SHOW arr
function showArr(list) {
  let txt = "";
  for (let elem in list) {
    txt += list[elem] + ' ';
  }
  return txt + '</br>';
}

//MAX in arr
let maximized;
function showMax(list) {
  let elem = document.getElementById(list.name);
  let max = Math.max.apply(null, list.arr);
  let min = Math.min.apply(null, list.arr);
  if (!maximized) {
    maximized = true;
    elem.innerHTML = max;
  } else if (maximized) {
    maximized = !maximized;
    elem.innerHTML = min;
  }
  return elem;
}

//SORT arr
let order = false;
function sortList(list) {
  order = !order;
  let newList;
  const setElement = () => document.getElementById(list.name).innerHTML = showArr(newList);

  if (order) {
    newList = list.arr.sort();
    newList = list.arr.sort(function(a, b) {return a - b});
    setElement();
  }
  else {
    newList = list.arr.reverse();
    newList = list.arr.sort(function(a, b) {return b - a});
    setElement();
  }
}

//SHUFFLE arr
function shuffleList(list) {
  let newList = list.arr;
  for (let i = newList.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = newList[i]
    newList[i] = newList[j]
    newList[j] = k
  }
  document.getElementById(list.name).innerHTML = showArr(newList);
}

//DOUBLE value
function doubleValue(list) {
  let newList = list.arr;
  function double(value, index, array) {
    return value * 2;
  }
  newList = newList.map(double);
  document.getElementById(list.name).innerHTML = showArr(newList);
}

//FILTER arr
function filterList(list) {
  let newList = list.arr;
  function filterArr(value, index, array) {
  return value > 10;
}
newList = newList.filter(filterArr);
document.getElementById(list.name).innerHTML = showArr(newList);
}

//Math.MIN/MAX with arrs
// const max = list.arr.reduce(function(a, b) {
//   return Math.max(a, b);
// }, -Infinity);

//RANDOM item
function randomItem(list) {
  let randomItem = list.arr[Math.floor(Math.random()*list.arr.length)];
  document.getElementById(list.name).innerHTML = randomItem;
}

//Math random
function playMath(list) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  document.getElementById(list.name).innerHTML = getRandomInt(1, 10);
}

//Search item in arr
function includesSearch(list) {
  let input = document.getElementById("searchButton").value;
  let listName = document.getElementById(list.name);
  let searchElement = list.arr.includes(input.toLowerCase());
  searchElement ? listName.innerHTML = input : listName.innerHTML = "No such fruit";
}

//wordToReplace
const wordReplace = document.getElementById("wordReplace");
const wordPaste = document.getElementById("wordPaste");
const quote = document.getElementById("quote");
let replacebleWord;

function wordToPaste() {
  replacebleWord = wordReplace.value;
  wordPaste.focus();
}

//Replace word in text
function replaceWord() {
  if (replacebleWord) {
    let regexp = new RegExp(replacebleWord, 'i');
    quote.innerHTML = quote.innerHTML.replace(regexp, wordPaste.value);
    wordReplace.value = '';
    wordPaste.value = '';
    wordReplace.focus();
  }
  wordReplace.focus();
}

//TODO replace all matches
const symbolReplace = document.getElementById("symbolReplace");
const symbolPaste = document.getElementById("symbolPaste");
const par1 = document.getElementById("par1");
let replacebleSymbol;

function symbolToPaste() {
  replacebleSymbol = symbolReplace.value;
  symbolPaste.focus();
}

function replaceSymbol() {
  if (replacebleSymbol) {
    let regexp = new RegExp(replacebleSymbol, 'i');
    par1.innerHTML = par1.innerHTML.replace(regexp, symbolPaste.value);
    symbolReplace.value = '';
    symbolPaste.value = '';
    symbolReplace.focus();
  }
  symbolReplace.focus();
}

//Counter
const counterElem = document.getElementById("counter");
const addCounter = document.getElementById("addCounter");
const substractCounter = document.getElementById("substractCounter");
const counter = {
  value : 0,
  get reset() { this.value = 0; this.render; },
  get increment() { this.value++; this.render; },
  get decrement() { this.value--; this.render; },
  get add() { this.value += +addCounter.value; this.render; this.clearInput(addCounter) },
  get substract() { this.value -= +substractCounter.value; this.render; this.clearInput(substractCounter) },
  get render() { counterElem.innerHTML = counter.value; },
  clearInput(input) { input.value = '' }
};

//Counter by function
const add = (function () {
  let counter = 0;
  return function () {counter+=1; return counter}
})();
function countOne() {
  document.getElementById("counterOne").innerHTML = add();
}

//Ш++ test prepare
function wheelsSum(bikes, cars) {
  return (bikes * 2) + (cars * 4);
} console.log("Wheels sum  is: " + wheelsSum(2, 2));

function isEqual(a, b, c) {
  let sum = a + b + c;
  if (sum >= 0 && sum <= 100) {
    if (a == b && a == c) return -1;
    else return 1;
  } else return Math.max(a, b, c);
} console.log("isEqual result: " + isEqual(5, 95, 5));

//Напишіть функцію, яка приймає на вхід два числа
//і повертає суму всіх цілих чисел між ними,
//які діляться без остачі на 5 або на одне з цих чисел.
function sumIntFive(a, b) {
  let sum = 0;
  if (a && b) {
    for (let i = a; i <= b; i++) {
      if ((i % 5) == 0 || i % a == 0 || a % b == 0) {
        sum += i;
      }
    }
  } else console.log("A numbers must be passed");
  return sum;
} console.log("Sum of integers is: " + sumIntFive(0, 20));

/*Напишіть функцію, яка приймає на вхід два масива однакової довжини
+ параметр, який описує їх довжину;
і модифікує їх таким чином,
що в першому масиві в кожній i-тій комірці знаходиться різниця цієї комірки
і відповідної i-тої комірки другого масиву,
а в другому масиві в кожній i-тій комірці знаходиться сума цієї комірки
і відповідної i-тої комірки першого масиву.
*/
function sumAndOdd(arr1, arr2, arrsLength) {
  
}