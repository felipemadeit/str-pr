document.addEventListener('DOMContentLoaded', function () {
    const containerComponents = document.querySelector('.container-components');
    const paginationDiv = document.querySelector('.container-prev-next');
    const heightComponents = containerComponents.offsetHeight;

    // Establecer posición absoluta y ajustar top para posicionar debajo de container-components
    paginationDiv.style.position = 'absolute';
    paginationDiv.style.top = (heightComponents + 300) + 'px';
})


function toggleItems() {
    const items = document.querySelectorAll('.order-by');
    const containerFilter = document.querySelector('.container-filter');
    const containerComponents = document.querySelector('.container-components');
    const paginationDiv = document.querySelector('.container-prev-next');

    

    let isVisible = Array.from(items).some(item => item.classList.contains('show'));

    if (isVisible) {
        items.forEach(item => {
            item.classList.remove('show');
            item.classList.add('hide');
            setTimeout(() => {
                item.style.display = 'none';
            }, 10); // Coincide con la duración de la transición
        });
        containerFilter.style.height = '200px';
        containerComponents.style.top = '70px'; // Volver a la posición original
    } else {
        items.forEach(item => {
            item.style.display = 'inline-block';
            setTimeout(() => {
                item.classList.remove('hide');
                item.classList.add('show');
            }, 10);
        });
        setTimeout(() => {
            containerFilter.style.height = 'auto';
            containerComponents.style.top = `${containerFilter.offsetHeight + 20}px`;
        }, 10); // Pequeño retardo para asegurar que display se aplique antes de la clase
    }

    
}
