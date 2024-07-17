document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container-brands');
    let scrollAmount = 0;
    const scrollStep = 150; 
    const delay = 1500; 

    function autoScroll() {
        if (window.innerWidth > 400) {
            scrollAmount += scrollStep;
            if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                scrollAmount = 0;
            }
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        } else {
            scrollAmount += scrollStep;
            if (scrollAmount >= container.scrollHeight - container.clientHeight) {
                scrollAmount = 0;
            }
            container.scrollTo({
                top: scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    setInterval(autoScroll, delay);
});