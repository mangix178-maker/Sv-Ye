// Efecto al pasar el mouse por los videos goteando
document.querySelectorAll('.videos-goteando video').forEach(video => {
    video.addEventListener('mouseover', () => {
        video.style.transform = 'scale(1.05)';
        video.style.borderColor = '#b53035'; // Rojo más oscuro
    });
    video.addEventListener('mouseout', () => {
        video.style.transform = 'scale(1)';
        video.style.borderColor = '#ff0055'; // Rojo original
    });
});

// Nuevo efecto visual al pasar por el texto central
const textoCentral = document.querySelector('.texto-central');
textoCentral.addEventListener('mouseover', () => {
    textoCentral.style.boxShadow = '0 0 30px #ff005577'; // Brillo suave
});
textoCentral.addEventListener('mouseout', () => {
    textoCentral.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
});

function lanzarMagia() {
    // 1. Mostrar el modal
    const modal = document.getElementById('modal-magia');
    modal.style.display = 'flex';

    // 2. Lluvia de corazones infinita en toda la pantalla
    const contenedor = document.getElementById('explosion-corazones');
    contenedor.style.position = 'fixed';
    contenedor.style.top = '0';
    contenedor.style.left = '0';
    contenedor.style.width = '1000%';
    contenedor.style.height = '1000%';
    contenedor.style.pointerEvents = 'none';
    contenedor.style.zIndex = '10000'; // Que esté por encima de todo
    contenedor.innerHTML = ''; 

    // Creamos 80 corazones en lugar de 50
    for (let i = 0; i < 80; i++) {
        const corazon = document.createElement('div');
        corazon.innerHTML = '❤️';
        corazon.className = 'corazon-rojo';
        corazon.style.position = 'absolute';
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.top = '-50px';
        corazon.style.fontSize = (Math.random() * 50 + 30) + 'px';
        corazon.style.animationDuration = (Math.random() * 7 + 6) + 's';
        contenedor.appendChild(corazon);
        
        setTimeout(() => corazon.remove(), 5000);
    }
}

function cerrarMagia() {
    document.getElementById('modal-magia').style.display = 'none';
}

// Cierra si hace clic en el fondo oscuro
window.onclick = function(event) {
    const modal = document.getElementById('modal-magia');
    if (event.target == modal) {
        cerrarMagia();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const contenedorFondo = document.getElementById('fondo-corazones');
    
    // Generar 30 corazones de fondo aleatorios
    for (let i = 0; i < 30; i++) {
        const corazon = document.createElement('div');
        corazon.innerHTML = '❤️';
        corazon.className = 'corazon-fondo';
        
        // Tamaños aleatorios
        corazon.style.fontSize = (Math.random() * 20 + 10) + 'px';
        // Posiciones aleatorias
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.top = Math.random() * 100 + 'vh';
        // Duración aleatoria para que no se muevan todos igual
        corazon.style.animationDuration = (Math.random() * 5 + 5) + 's';
        
        contenedorFondo.appendChild(corazon);
    }
});

// Este script detecta cuando el video está en pantalla para darle Play
const videos = document.querySelectorAll('.video-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play(); // Reproduce si el video se ve
        } else {
            entry.target.pause(); // Pausa para ahorrar memoria si no se ve
        }
    });
}, { threshold: 0.5 }); // Se activa cuando el 50% del video es visible

videos.forEach(video => observer.observe(video));