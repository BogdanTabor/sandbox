const fruits = {
  name: "fruits",
  arr: [ 'apple', 'kiwi', 'banana' ]
  // arr: fruits
}
const nums = {
  name: "nums",
  arr: [42, 100, 1, 5, 25, 10],
};

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
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const getTime = () => document.getElementById("time")
.textContent = new Date().toLocaleTimeString();
setInterval(getTime, 1000);

//headerDate
const getDate = () => document.getElementById("date")
.textContent = `${new Date().getDate()}${days[new Date().getDay()]}`;
setInterval(getDate, 1000);


//SHOW arr
function showArr(list) {
  let txt = "";
  for (let elem in list) {
    txt += list[elem] + ' ';
  }
  return txt + '</br>';
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

//Math sandbox
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
// Define an object
const obj = {counter : 0};
// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});
function increm() {
  obj.increment;
    document.getElementById("counter").innerHTML = obj.counter;
}
function decrem() {
  obj.decrement;
    document.getElementById("counter").innerHTML = obj.counter;
}
function res() {
  obj.reset;
    document.getElementById("counter").innerHTML = obj.counter;
}
// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("counter").innerHTML = obj.counter;
