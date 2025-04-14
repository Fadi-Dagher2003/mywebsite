// scripts.js

function redirect(event, url) {
    // Prevent checkbox toggle default behavior if needed
    event.stopPropagation(); // Prevent the click event from bubbling up

    setTimeout(() => {
        window.location.replace(url);
    }, 300); // Delay in milliseconds (300ms in this example)
}

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var closeBtn = document.querySelector(".close");

    // Check if the modal has been shown before
    var hasShownModal = localStorage.getItem('hasShownModal');

    // Show the modal after 1 second if it hasn't been shown
    if (!hasShownModal) {
        setTimeout(function() {
            modal.style.display = "block";
            // Set the flag in localStorage to indicate that the modal has been shown
            localStorage.setItem('hasShownModal', 'true');
        }, 1000); // 1000 ms = 1 second
    }

    // Close the modal when the user clicks the close button
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // Close the modal if the user clicks anywhere outside of the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

// Intersection Observer for items
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    });

    items.forEach(item => {
        observer.observe(item);
    });
});

// Another Intersection Observer for items(popup effect)
document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    items.forEach(item => {
        observer.observe(item);
    });
});

// Initialize Swiper
document.addEventListener('DOMContentLoaded', function () {
    var Swipes = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 5000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Autoplay continues after user interaction
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Allow pagination to be clickable
        },
    });
});