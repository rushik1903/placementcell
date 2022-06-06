var slideIndex1 = 0;
carousel();
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
}


function myFunction1() {   
document.getElementById("coe").classList.toggle("show");
document.getElementById("edm").classList.remove("show");
document.getElementById("mdm").classList.remove("show");
document.getElementById("msm").classList.remove("show");
}

function myFunction2() {
document.getElementById("coe").classList.remove("show");   
document.getElementById("edm").classList.toggle("show");
document.getElementById("mdm").classList.remove("show");
document.getElementById("msm").classList.remove("show");
}
function myFunction3() {   
document.getElementById("mdm").classList.toggle("show");
document.getElementById("msm").classList.remove("show");
document.getElementById("edm").classList.remove("show");
document.getElementById("coe").classList.remove("show");   
}

function myFunction4() {   
document.getElementById("msm").classList.toggle("show");
document.getElementById("edm").classList.remove("show");
document.getElementById("coe").classList.remove("show");  
document.getElementById("mdm").classList.remove("show");

}


function myFunction5() {   
document.getElementById("ced").classList.toggle("show");
document.getElementById("evd").classList.remove("show");
document.getElementById("esd").classList.remove("show");
document.getElementById("mpd").classList.remove("show");
document.getElementById("mfd").classList.remove("show");

}
function myFunction6() {   
  document.getElementById("ced").classList.remove("show");
document.getElementById("evd").classList.toggle("show");
document.getElementById("esd").classList.remove("show");
document.getElementById("mpd").classList.remove("show");
document.getElementById("mfd").classList.remove("show");
}

function myFunction7() {   
  document.getElementById("ced").classList.remove("show");
  document.getElementById("evd").classList.remove("show");
document.getElementById("esd").classList.toggle("show");
document.getElementById("mpd").classList.remove("show");
document.getElementById("mfd").classList.remove("show");
}
function myFunction8() {   
  document.getElementById("ced").classList.remove("show");
  document.getElementById("evd").classList.remove("show");
  document.getElementById("esd").classList.remove("show");
document.getElementById("mpd").classList.toggle("show");
document.getElementById("mfd").classList.remove("show");
}


function myFunction9() {   
  document.getElementById("ced").classList.remove("show");
  document.getElementById("evd").classList.remove("show");
  document.getElementById("esd").classList.remove("show");
  document.getElementById("mpd").classList.remove("show");
  document.getElementById("mfd").classList.toggle("show");
}


function myFunction10() {   
document.getElementById("cds").classList.toggle("show");
document.getElementById("eds").classList.remove("show");
document.getElementById("mds").classList.remove("show");
document.getElementById("smt").classList.remove("show");
}


function myFunction11() {   
  document.getElementById("cds").classList.remove("show");
document.getElementById("eds").classList.toggle("show");
document.getElementById("mds").classList.remove("show");
document.getElementById("smt").classList.remove("show");
}


function myFunction12() {   
  document.getElementById("cds").classList.remove("show");
  document.getElementById("eds").classList.remove("show");
  document.getElementById("mds").classList.toggle("show");
  document.getElementById("smt").classList.remove("show");
}


function myFunction13() {   
  document.getElementById("cds").classList.remove("show");
  document.getElementById("eds").classList.remove("show");
  document.getElementById("mds").classList.remove("show");
  document.getElementById("smt").classList.toggle("show");
}

