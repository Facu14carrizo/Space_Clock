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