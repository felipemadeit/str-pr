document.addEventListener('DOMContentLoaded', function () {
    // Obtener el ancho actual de la ventana
    const windowWidth = window.innerWidth;

    if (windowWidth <= 400) {
        const containerComponents = document.querySelector('.container-components');
        const paginationDiv = document.querySelector('.container-prev-next');
        const heightComponents = containerComponents.offsetHeight;

        paginationDiv.style.position = 'absolute';
        paginationDiv.style.top = (heightComponents + 300) + 'px';
    }
});

function toggleItems() {
    const items = document.querySelectorAll('.order-by');

    items.forEach(item => {
        if(item.style.display === 'none' || item.style.display === '') {
            item.style.display = 'inline-block';
        } else  {
            item.style.display = 'none'
        }
    });
}