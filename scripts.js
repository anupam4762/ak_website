// Smooth scrolling



$('a[href*="#top"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


function filterSelection(category) {
    // Remove the 'notes-btn-active' class from all buttons
    var buttons = document.querySelectorAll('.notes-btn');
    buttons.forEach(function(button) {
        button.classList.remove('notes-btn-active');
    });

    // Add the 'notes-btn-active' class to the selected button
    var selectedButton = document.getElementById(category);
    if (selectedButton) {
        selectedButton.classList.add('notes-btn-active');
    }

    // Hide all containers initially
    var containers = document.querySelectorAll('.notes-container');
    containers.forEach(function(container) {
        container.style.display = 'none';
    });
    
    // Show the selected container and update the heading
    if (category === 'all') {
        containers.forEach(function(container) {
            container.style.display = 'block';
        });
    } else {
        var selectedContainer = document.querySelector('.' + category);
        if (selectedContainer) {
            selectedContainer.style.display = 'block';
            var heading = selectedContainer.querySelector(".section-heading");
            if (heading) {
                heading.innerHTML = category;
            }
        }
    }
}

// Activate 'All' button by default
window.onload = function() {
    filterSelection('all');
};
