const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');

btn1.addEventListener('click', displayCard1);
btn2.addEventListener('click', displayCard2);
btn3.addEventListener('click', displayCard3);
btn4.addEventListener('click', displayCard4);
btn5.addEventListener('click', displayCard5);



function displayCard1(){
  const box1 = document.getElementById('box-1');
  console.log('clc');
  if(box1.style.display === 'none'){
    box1.style.display = 'block';
  } else {
    box1.style.display = 'none';
  }
  
}


function displayCard2(){
  const box2 = document.getElementById('box-2');
  console.log('clc');
  if(box2.style.display === 'none'){
    box2.style.display = 'block';
  } else {
    box2.style.display = 'none';
  }
}

function displayCard3(){
  const box3 = document.getElementById('box-3');
  console.log('clc');
  if(box3.style.display === 'none'){
    box3.style.display = 'block';
  } else {
    box3.style.display = 'none';
  }
}

function displayCard4(){
  const box4 = document.getElementById('box-4');
  console.log('clc');
  if(box4.style.display === 'none'){
    box4.style.display = 'block';
  } else {
    box4.style.display = 'none';
  }
}

function displayCard5(){
  const box5 = document.getElementById('box-5');
  console.log('clc');
  if(box5.style.display === 'none'){
    box5.style.display = 'block';
  } else {
    box5.style.display = 'none';
  }
}

