document.addEventListener("DOMContentLoaded", function() {
    const handleScroll = (container, cards) => {
        let minDiff = Number.MAX_VALUE;
        let centerCard = null;

        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const diff = Math.abs(containerCenter - cardCenter);

            if (diff < minDiff) {
                minDiff = diff;
                centerCard = card;
            }
        });

        if (centerCard) {
            cards.forEach(card => card.classList.remove('center'));
            centerCard.classList.add('center');
        }
    };

    const setupCarousel = (containerSelector) => {
        const container = document.querySelector(containerSelector);
        const cards = container.querySelectorAll('.card_product');

        if (!container) return;

        container.addEventListener('scroll', () => handleScroll(container, cards));
        handleScroll(container, cards); // Initial call

        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener("mousedown", function(e) {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener("mouseleave", function() {
            isDown = false;
        });

        container.addEventListener("mouseup", function() {
            isDown = false;
        });

        container.addEventListener("mousemove", function(e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 0.1; 
            container.scrollLeft = scrollLeft - walk;
        });

        container.addEventListener("scroll", () => {
            clearTimeout(container.scrollTimeout);
            container.scrollTimeout = setTimeout(() => {
                handleScroll(container, cards);
            }, 150);
        });
    };

    setupCarousel(".show_products.processors .cards-container");
    setupCarousel(".show_products.graphics .cards-container");
    setupCarousel(".show_products.laptops .cards-container");
    setupCarousel(".show_products.keyboards .cards-container");
    const container = document.querySelector(".container-carousel-img");
    const arrowPrev = document.querySelector(".arrow-p");
    const arrowNext = document.querySelector(".arrow-n");

    if (container && arrowPrev && arrowNext) {
        let isDown = false;
        let startX;
        let scrollLeft;

    arrowPrev.addEventListener("click", function() {
        container.scrollBy({
            left: -245,
            behavior: "smooth"
    });
});

    arrowNext.addEventListener("click", function() {
        container.scrollBy({
            left: 245,
            behavior: "smooth"
        });
});

    container.addEventListener("mousedown", function(e) {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener("mouseleave", function() {
        isDown = false;
    });

    container.addEventListener("mouseup", function() {
        isDown = false;
    });

    container.addEventListener("mousemove", function(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 3;
        container.scrollLeft = scrollLeft - walk;
    });
    
    }

});

const prevButtonProcessors = document.querySelector(".show_products.processors .arrow-prev");
const nextButtonProcessors = document.querySelector(".show_products.processors .arrow-next");
const cardsContainerProcessors = document.querySelector(".show_products.processors .cards-container");

if (prevButtonProcessors && nextButtonProcessors && cardsContainerProcessors) {
    let isDown = false;
    let startX;
    let scrollLeft;
    
    
    // Eventos para botones de navegación de procesadores
    prevButtonProcessors.addEventListener("click", function() {
        cardsContainerProcessors.scrollBy({
            left: -245,
            behavior: "smooth"
        });
    });
    nextButtonProcessors.addEventListener("click", function() {
        cardsContainerProcessors.scrollBy({
            left: 245,
            behavior: "smooth"
        });
    });
    
    cardsContainerProcessors.addEventListener("mousedown", function(e)  {
        isDown = true;
        startX = e.pageX - cardsContainerProcessors.offsetLeft;
        scrollLeft = cardsContainerProcessors.scrollLeft;
    })
    
    cardsContainerProcessors.addEventListener("mouseleave", function() {
        isDown = false;
    })
    
    cardsContainerProcessors.addEventListener("mouseup", function() {
        isDown = false;
    })
    
     cardsContainerProcessors.addEventListener("mousemove", function(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - cardsContainerProcessors.offsetLeft;
        const walk = (x-startX)*3;
        cardsContainerProcessors.scrollLeft = scrollLeft-walk;
    });
};



// Selectores para el carrusel de gráficos
const prevButtonGraphics = document.querySelector(".show_products.graphics .arrow-prev");
const nextButtonGraphics = document.querySelector(".show_products.graphics .arrow-next");
const cardsContainerGraphics = document.querySelector(".show_products.graphics .cards-container");
// Eventos para botones de navegación de gráficos

if (prevButtonGraphics && nextButtonGraphics && cardsContainerGraphics) {
    prevButtonGraphics.addEventListener("click", function() {
        cardsContainerGraphics.scrollBy({
            left: -245,
            behavior: "smooth"
        });
    });
    nextButtonGraphics.addEventListener("click", function() {
        cardsContainerGraphics.scrollBy({
            left: 245,
            behavior: "smooth"
        });
    });
}



// Selectores para el carrusel de laptops
const prevButtonLaptops = document.querySelector(".show_products.laptops .arrow-prev");
const nextButtonLaptops = document.querySelector(".show_products.laptops .arrow-next");
const cardsContainerLaptops = document.querySelector(".show_products.laptops .cards-container");


if (prevButtonLaptops && nextButtonLaptops && cardsContainerLaptops) {
    // Eventos para botones de navegación de gráficos
    prevButtonLaptops.addEventListener("click", function() {
        cardsContainerLaptops.scrollBy({
            left: -245,
            behavior: "smooth"
        });
    });

    nextButtonLaptops.addEventListener("click", function() {
        cardsContainerLaptops.scrollBy({
            left: 245,
            behavior: "smooth"
        });
});

}


// Selectores para el carrusel de laptops
const prevButtonKeyboards = document.querySelector(".show_products.keyboards .arrow-prev");
const nextButtonKeyboards = document.querySelector(".show_products.keyboards .arrow-next");
const cardsContainerKeyboards = document.querySelector(".show_products.keyboards .cards-container");

if (prevButtonKeyboards && nextButtonKeyboards && cardsContainerKeyboards) {
    prevButtonKeyboards.addEventListener("click", function() {
        cardsContainerKeyboards.scrollBy({
            left: -245,
            behavior: "smooth"
        });
    });
    
    nextButtonKeyboards.addEventListener("click", function() {
        cardsContainerKeyboards.scrollBy({
            left: 245,
            behavior: "smooth"
        });
        }
    
    
    );
};
