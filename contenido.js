// Obtener todos los botones
const botones = document.querySelectorAll('.btn-info');

// Función para mostrar/ocultar la descripción
function toggleDescripcion(event) {
    const infoItem = event.target.closest('.info-item');
    const descripcion = infoItem.querySelector('.descripcion');
    
    // Si la descripción está oculta, la mostramos, si está visible, la ocultamos
    if (descripcion.style.display === 'block') {
        descripcion.style.display = 'none';
    } else {
        descripcion.style.display = 'block';
    }
}

// Asignar evento de clic a cada botón
botones.forEach(btn => {
    btn.addEventListener('click', toggleDescripcion);
});
