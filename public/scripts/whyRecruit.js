/*var slideIndex1 = 0;
// carousel();
function carousel() {
  var j;
  var x = document.getElementsByClassName("mySlides1");
  for (j = 0; j < x.length; j++) {
    x[j].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > x.length) {slideIndex1 = 1}
  x[slideIndex1-1].style.display = "block";
  setTimeout(carousel,2300); // Change image every 2.3 seconds
}*/


const bachelors = document.getElementById("details1");
const dd = document.getElementById("details2");
const masters = document.getElementById("details3");

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
// Initially display bachelors div and hide the others.
bachelors.style.display = "block";
dd.style.display = "none";
masters.style.display = "none";
// On clicking btn1, the bachelors div is displayed and the others are hidden.
btn1.addEventListener("click", function() {
  bachelors.style.display = "block";
  dd.style.display = "none";
  masters.style.display = "none";
}
);
// On clicking btn2, the masters div is displayed and the others are hidden.
btn2.addEventListener("click", function () {
  bachelors.style.display = "none";
  dd.style.display = "block";
  masters.style.display = "none";
}
);
// On clicking btn3, the masters div is displayed and the others are hidden.
btn3.addEventListener("click", function () {
  bachelors.style.display = "none";
  dd.style.display = "none";
  masters.style.display = "block";
}
);
// On hovering over the btn1, the bachelors div is displayed and the others are hidden.
btn1.addEventListener("mouseover", function () {
  bachelors.style.display = "block";
  dd.style.display = "none";
  masters.style.display = "none";
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
}
);
// On hovering over the btn2, the masters div is displayed and the others are hidden.
btn2.addEventListener("mouseover", function () {
  bachelors.style.display = "none";
  dd.style.display = "block";
  masters.style.display = "none";
  // add active class to btn2
  btn2.classList.add("active");
  btn1.classList.remove("active");
  btn3.classList.remove("active");
}
);
// On hovering over the btn3, the masters div is displayed and the others are hidden.
btn3.addEventListener("mouseover", function () {
  bachelors.style.display = "none";
  dd.style.display = "none";
  masters.style.display = "block";
  btn3.classList.add("active");
  btn1.classList.remove("active");
  btn2.classList.remove("active");
}
);