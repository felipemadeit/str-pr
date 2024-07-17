document.addEventListener('DOMContentLoaded', function() {
    fetchCartItemCount();

    const menuToggle = document.getElementById('list-nav');
    const buttonToggle = document.getElementById('nav-toggle');

    function toggleMenu() {
        if (menuToggle.style.display === 'none' || menuToggle.style.display === '') {
            menuToggle.style.display = 'block'; // Show the menu
            setTimeout(function() {
                menuToggle.style.left = '0px'; // Slide in from the left
            }, 10); // Small delay to allow CSS to apply the display change
        } else {
            menuToggle.style.left = '-250px'; // Slide out to the left
            setTimeout(function() {
                menuToggle.style.display = 'none'; // Hide the menu after transition
            }, 300); // Match the duration of the CSS transition
        }
    }

    buttonToggle.addEventListener('click', function() {
        toggleMenu();
    });

    
});

function fetchCartItemCount() {
    fetch('/api/cart_item_count/')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else if (response.status === 401) { // Unauthorized
                window.location.href = '/login/';
                return Promise.reject('User not authenticated');
            } else {
                return Promise.reject('Unexpected response status: ' + response.status);
            }
        })
        .then(data => {
            let totalCartElement = document.getElementById('total-cart');
            if (totalCartElement && data.total_items !== undefined) {
                totalCartElement.textContent = `${data.total_items}`;
            }
        })
        .catch(error => console.error('Error fetching cart item count:', error));
}