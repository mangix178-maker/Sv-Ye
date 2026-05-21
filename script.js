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

    // 2. Explosión de corazones
    const contenedor = document.getElementById('explosion-corazones');
    contenedor.innerHTML = ''; // Limpia corazones previos

    for (let i = 0; i < 50; i++) {
        const corazon = document.createElement('div');
        corazon.innerHTML = '❤️';
        corazon.className = 'corazon-rojo';
        corazon.style.left = Math.random() * 100 + 'vw';
        corazon.style.top = '-20px';
        corazon.style.animationDelay = (Math.random() * 2) + 's';
        contenedor.appendChild(corazon);
        
        setTimeout(() => corazon.remove(), 6000);
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