const imagen = document.getElementById('imagen-san-la-muerte');
const area = document.querySelector(".area");
/* const swiperEl = document.querySelector('swiper-container');



swiperEl.addEventListener('swiperslidechange', (event) => {
    console.log('slide changed');
});

swiperEl.addEventListener('swiperprogress', (event) => {
    const [swiper, progress] = event.detail;

});

swiperEl.on('init', function () {
    console.log("asdsad")
});
 */
/* document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        // Tus opciones de Swiper
        on: {
            slideChange: function () {
                console.log('Diapositiva activa (cambio):', this.activeIndex);
                // Acciones al cambiar de slide
            },
        },
    });

    // Obtener la diapositiva activa en la carga inicial
    console.log('Diapositiva activa (inicial):', swiper.activeIndex);

    // Si necesitas realizar alguna acción específica en la carga inicial
    const initialIndex = swiper.activeIndex;
    // ... tu lógica basada en initialIndex
}); */

area.addEventListener('click', (e) => {
    let elemento = e.target
    alert(elemento.dataset.id)
})
//La idea seria que sepa en que slider esta, cual esta activo y apartir de hay el area clikiable
function actualizarAreaClic() {
    /* const imgRect = imagen.getBoundingClientRect();
    const contenedorRect = imagen.parentElement.getBoundingClientRect();
 */
    // Calcula la posición y el tamaño del área clicable en relación con la imagen
    const areaLeft = 53.75//((235 / 400) * 100); // Porcentaje basado en el ancho original de la imagen
    const areaTop = 24.735// ((14000 / 566) / 100) * 100;
    const areaWidth = 25.5//((130 / 400) * 100);
    const areaHeight = 65// ((39050 / 566) / 100) * 100;


    areaClic.style.left = `${areaLeft}%`;
    areaClic.style.top = `${areaTop}%`;
    areaClic.style.width = `${areaWidth}%`;
    areaClic.style.height = `${areaHeight}%`;
}



// Llama a la función inicialmente y cuando la ventana cambie de tamaño
/* actualizarAreaClic();
window.addEventListener('resize', actualizarAreaClic); */