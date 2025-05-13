
const libroContenedor = document.querySelector('.libro-contenedor');
const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');
let paginaActual = 0;
const tiempoAnimacion = 0.5;
const totalPaginas = 14;
const nombreBaseImagen = 'img/';
const extensionImagen = '.png';
const prefijoIdPagina = 'pagina-';

// Generar las páginas dinámicamente (sin cambios aquí)
for (let i = 0; i < totalPaginas; i++) {
    const numeroImagen = i + 3;
    const idPagina = prefijoIdPagina + numeroImagen;
    const rutaImagen = nombreBaseImagen + numeroImagen + extensionImagen;
    const paginaDiv = document.createElement('div');
    paginaDiv.classList.add('pagina');
    paginaDiv.id = idPagina;
    paginaDiv.style.display = i === 0 ? 'block' : 'none';
    paginaDiv.innerHTML = `
    
    <p>Este es el contenido de la página ${numeroImagen}.</p>
    <img src="${rutaImagen}" alt="Imagen ${numeroImagen}">
  `;
    libroContenedor.insertBefore(paginaDiv, botonAnterior);
}

const paginas = document.querySelectorAll('.pagina');
let navegandoAtras = false; // Nueva variable para rastrear la dirección de la navegación

function mostrarPagina(indice) {
    if (indice >= 0 && indice < paginas.length) {
        const paginaSaliente = paginas[paginaActual];
        const paginaEntrante = paginas[indice];
        const direccionXSaliente = navegandoAtras ? '100%' : '-100%';
        const direccionXEntranteDesde = navegandoAtras ? '-100%' : '100%';
        const direccionXEntranteHasta = '0%';

        gsap.to(paginaSaliente, {
            opacity: 0,
            x: direccionXSaliente,
            duration: tiempoAnimacion,
            onComplete: () => {
                paginaSaliente.style.display = 'none';
                paginaActual = indice;
                paginaEntrante.style.display = 'block';
                gsap.fromTo(
                    paginaEntrante,
                    { opacity: 0, x: direccionXEntranteDesde },
                    { opacity: 1, x: direccionXEntranteHasta, duration: tiempoAnimacion }
                );
                navegandoAtras = false; // Resetear la variable después de la animación
            },
        });
    }
}

function siguientePagina() {
    if (paginaActual < paginas.length - 1) {
        navegandoAtras = false; // Indicamos que no estamos navegando hacia atrás
        mostrarPagina(paginaActual + 1);
    }
}

function paginaAnterior() {
    if (paginaActual > 0) {
        navegandoAtras = true; // Indicamos que estamos navegando hacia atrás
        mostrarPagina(paginaActual - 1);
    }
}

botonSiguiente.addEventListener('click', siguientePagina);
botonAnterior.addEventListener('click', paginaAnterior);

// Mostrar la primera página al cargar
gsap.to(paginas[0], { opacity: 1, duration: tiempoAnimacion });
paginas[0].style.display = 'block';


 