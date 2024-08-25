// --------red hover effects start

document.querySelectorAll('.date-day-name').forEach(function(element) {
    element.addEventListener('click', function() {
        // Remove 'active' class from all elements
        document.querySelectorAll('.date-day-name').forEach(function(el) {
            el.classList.remove('active');
        });
        
        // Add 'active' class to the clicked element
        this.classList.add('active');
    });
});
// -------------------------------------------------------------------