//toggle
window.toggleLeft = function() {
  let element = document.getElementById("offcanvas-left");
  element.classList.toggle("hide");
}
window.toggleRight = function() {
  let element = document.getElementById("offcanvas-right");
  element.classList.toggle("hide");
}

// section1Text
let section1Text = `<b>Hypertext Markup Language (HTML)</b> is the standard markup language for creating web pages and web
applications. With <i>Cascading Style Sheets (CSS)</i> and <em>JavaScript</em>, it forms a triad of
<strong>cornerstone technologies</strong> for the World Wide Web.`;
document.getElementById('section1').innerHTML = section1Text;

//section2Text
const section2Text = `Web browsers receive <q>HTML documents</q> from a web server or from local storage and render them into
multimedia web pages. <a href="#">HTML describes</a> the structure of a web page semantically and originally
included cues for the appearance of the document.
`;
document.getElementById('section2').innerHTML = section2Text;

const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
//toLocaleTimeString()
//headerClock
const getTime = () => document.getElementById("time")
.textContent = new Date().toLocaleTimeString();
setInterval(getTime, 1000);

//headerDate
const getDate = () => document.getElementById("date")
.textContent = `${new Date().getDate()}${days[new Date().getDay()]}`;
setInterval(getDate, 1000);

const fruits = {
  name: "fruits",
  arr: ["apple", "apricot", "avocado", "banana"],
}
const nums = {
  name: "nums",
  arr: [42, 100, 1, 5, 25, 10],
};

console.log(~ 1000);

//SHOW arr
function showArr(list) {
  let txt = "";
  for (let x in list) {
    txt += list[x] + ' ';
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
newList = newList.filter(filterArr)
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
    return Math.floor(Math.random() * (max - min + 1) + min)
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
let replaceble;

function wordToPaste() {
  replaceble = wordReplace.value;
  wordPaste.focus()
}

//Replace word in text
function replaceWord() {
  if (replaceble) {
    let regexp = new RegExp(replaceble, 'i');
    quote.innerHTML = quote.innerHTML.replace(regexp, wordPaste.value);
    wordReplace.value = '';
    wordPaste.value = '';
    wordReplace.focus()
  }
  wordReplace.focus()
}