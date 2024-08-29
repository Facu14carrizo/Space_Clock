// Marcar la hora
function currenTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;
    let watch = document.querySelector('#watch');
    watch.innerHTML = time;
}

setInterval(currenTime, 1000);

function createStars(numStars) {
    const body = document.body;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Establecer tamaño y posición aleatoria
        const size = Math.random() * 3 + 1; // Tamaño entre 1 y 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`; // Posición vertical
        star.style.left = `${Math.random() * 100}vw`; // Posición horizontal

        body.appendChild(star);
    }
}

// Llama a la función para crear 900 estrellas
createStars(900);


//Efecto distorcion por gravedad
const watch = document.getElementById('watch');

watch.addEventListener('mouseover', () => {
    watch.classList.add('distorted');
    // Muestra hora
});

watch.addEventListener('mouseout', () => {
    watch.classList.remove('distorted');
    // Oculta hora
});


// Musiquita
const rocketSound = new Audio('rocket-sound.mp3');

watch.addEventListener('click', () => {
    rocketSound.play();
});

// Efecto Mouse
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
