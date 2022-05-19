var slideIndex = 0;
var slideIndex1 = 0;
var slideIndex2 = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  var j;
  var x = document.getElementsByClassName("mySlides1");
  for (j = 0; j < x.length; j++) {
    x[j].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > x.length) {slideIndex1 = 1}
  x[slideIndex1-1].style.display = "block";
  var k;
  var x = document.getElementsByClassName("mySlides2");
  for (k = 0; k < x.length; k++) {
    x[k].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > x.length) {slideIndex2 = 1}
  x[slideIndex2-1].style.display = "block";
  setTimeout(carousel,2300); // Change image every 2.3 seconds
}
        function showDiv1() {
        document.getElementById('details1').style.display = "block";
        document.getElementById('details2').style.display = "none"; 
        document.getElementById('details3').style.display = "none"; 
        }
        function showDiv2() {
        document.getElementById('details1').style.display = "none";
        document.getElementById('details2').style.display = "block";
        document.getElementById('details3').style.display = "none"; 
        }
        function showDiv3() {
        document.getElementById('details1').style.display = "none";
        document.getElementById('details2').style.display = "none";
        document.getElementById('details3').style.display = "block"; 
        }

function myFunction1() {   
  document.getElementById("coe").classList.toggle("show");
}
function myFunction2() {   
  document.getElementById("edm").classList.toggle("show");
}
function myFunction3() {   
  document.getElementById("mdm").classList.toggle("show");
}
function myFunction4() {   
  document.getElementById("msm").classList.toggle("show");
}
function myFunction5() {   
  document.getElementById("ced").classList.toggle("show");
}
function myFunction6() {   
  document.getElementById("evd").classList.toggle("show");
}
function myFunction7() {   
  document.getElementById("esd").classList.toggle("show");
}
function myFunction8() {   
  document.getElementById("mpd").classList.toggle("show");
}
function myFunction9() {   
  document.getElementById("mfd").classList.toggle("show");
}
function myFunction10() {   
  document.getElementById("cds").classList.toggle("show");
}
function myFunction11() {   
  document.getElementById("eds").classList.toggle("show");
}
function myFunction12() {   
  document.getElementById("mds").classList.toggle("show");
}
function myFunction13() {   
  document.getElementById("smt").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
