// Función que se ejecuta cuando se hace clic en una imagen
const images = document.querySelectorAll('.imagen');

images.forEach(image => {
    image.addEventListener('click', function() {
        alert(`Has hecho clic en la imagen: ${this.alt}`);
    });
});
