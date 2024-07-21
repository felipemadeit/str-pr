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

    const setupCarousel = (containerSelector, prevButtonSelector, nextButtonSelector) => {
        const container = document.querySelector(containerSelector);
        const cards = container.querySelectorAll('.card_product');
        const prevButton = document.querySelector(prevButtonSelector);
        const nextButton = document.querySelector(nextButtonSelector);
        
        if (!container || !prevButton || !nextButton) return;

        container.addEventListener('scroll', () => handleScroll(container, cards));
        handleScroll(container, cards); // Initial call

        const scrollToCard = (direction) => {
            const containerRect = container.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;
            let minDiff = Number.MAX_VALUE;
            let targetCard = null;

            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                const diff = Math.abs(containerCenter - cardCenter);

                if (direction === 'prev' && cardRect.left < containerCenter && diff < minDiff) {
                    minDiff = diff;
                    targetCard = card;
                } else if (direction === 'next' && cardRect.left > containerCenter && diff < minDiff) {
                    minDiff = diff;
                    targetCard = card;
                }
            });

            if (targetCard) {
                container.scrollBy({
                    left: targetCard.getBoundingClientRect().left - containerCenter + (targetCard.offsetWidth / 2),
                    behavior: 'smooth'
                });
            }
        };

        prevButton.addEventListener("click", () => scrollToCard('prev'));
        nextButton.addEventListener("click", () => scrollToCard('next'));

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
            const walk = (x - startX) * 0.5; // Reduce the sensitivity by decreasing the multiplier
            container.scrollLeft = scrollLeft - walk;
        });

        container.addEventListener("scroll", () => {
            clearTimeout(container.scrollTimeout);
            container.scrollTimeout = setTimeout(() => {
                handleScroll(container, cards);
            }, 150);
        });
    };

    setupCarousel('.show_products.processors .cards-container', '.show_products.processors .arrow-prev', '.show_products.processors .arrow-next');
    setupCarousel('.show_products.graphics .cards-container', '.show_products.graphics .arrow-prev', '.show_products.graphics .arrow-next');
    setupCarousel('.show_products.laptops .cards-container', '.show_products.laptops .arrow-prev', '.show_products.laptops .arrow-next');
    setupCarousel('.show_products.keyboards .cards-container', '.show_products.keyboards .arrow-prev', '.show_products.keyboards .arrow-next');

    const container = document.querySelector('.container-cards');
    if (container) {
        container.addEventListener('wheel', (event) => {
            event.preventDefault();
            container.scrollBy({
                left: event.deltaY < 0 ? -100 : 100, // Reduce the sensitivity by decreasing the amount scrolled
                behavior: 'smooth'
            });
        });
    }
});
