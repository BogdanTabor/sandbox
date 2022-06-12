//toggle
window.toggleLeft = function() {
  let element = document.getElementById("offcanvas-left");
  element.classList.toggle("hide");
}
window.toggleRight = function() {
  let element = document.getElementById("offcanvas-right");
  element.classList.toggle("hide");
}

//header_button
const btn = document.getElementById('btn');
let btntxt = btn.textContent;
const burn = function() {
  btntxt = btntxt.padStart(15, '🔥');
  btn.innerHTML = btntxt;
  setTimeout(() => {
    alert(`The charcode of 🔥 is: ` + btntxt.charCodeAt(0))
  }, 1000)
}
btn.addEventListener('click', () => {
  burn();
})

// section1Text
const section1Text = `<b>Hypertext Markup Language (HTML)</b> is the standard markup language for creating web pages and web
applications. With <i>Cascading Style Sheets (CSS)</i> and <em>JavaScript</em>, it forms a triad of
<strong>cornerstone technologies</strong> for the World Wide Web.`;
document.getElementById('section1').innerHTML = section1Text;

//section2Text
const section2Text = `Web browsers receive <q>HTML documents</q> from a web server or from local storage and render them into
multimedia web pages. <a href="#">HTML describes</a> the structure of a web page semantically and originally
included cues for the appearance of the document.
`;
document.getElementById('section2').innerHTML = section2Text;

// let listFruits = "<ul>";

// fruits.forEach(showFruits);
// listFruits += "</ul>";
// document.getElementById("fruits").innerHTML = 
// listFruits;

// function showFruits(value) {
//   listFruits += "<li>" + value + "</li>";
// }

//next list of fruits
const fruits = {
  arr: ["Banana", "Orange", "Apple", "Mango", "Kiwi"],
  name: "fruits",
};

//arr numbers
const nums = {
  arr: [42, 100, 1, 5, 25, 10],
  name: "nums",
};

//SortLists
let order = false;
let element;
function sortList(list) {
  order = !order;
  element = list.name;
  const setElement = () => document.getElementById(element).innerHTML = list.arr;
  if (order) {
    list.arr.sort();
    list.arr.sort(function(a, b) {return a - b});
    setElement();
  }
  else {
    list.arr.reverse();
    list.arr.sort(function(a, b) {return b - a});
    setElement();
  }
}
