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
// for eats to got selected abd booked
// Select all the seats
// Select all the seats
const seats = document.querySelectorAll('.seats');

// Loop through each seat and add a click event listener
seats.forEach((seat) => {
    seat.addEventListener('click', () => {
        // Check if the seat is already booked
        if (seat.style.backgroundColor === 'rgb(240, 49, 49)') {
            const confirmCancel = confirm('This seat is already booked! Do you want to cancel the booking?');
            if (confirmCancel) {
                seat.style.backgroundColor = 'rgb(75, 72, 72)'; // Cancel the booking
            }
        } 
        // If the seat is selected, toggle the selection off
        else if (seat.style.backgroundColor === 'rgb(88, 253, 88)') {
            seat.style.backgroundColor = 'rgb(75, 72, 72)'; // Deselect the seat
        } 
        // If the seat is not selected or booked, select it
        else {
            seat.style.backgroundColor = 'rgb(240, 49, 49)'; // Select the seat
        }
    });

    // Add hover effect to show availability for selection
    seat.addEventListener('mouseover', () => {
        if (seat.style.backgroundColor === 'rgb(75, 72, 72)') {
            seat.style.backgroundColor = 'rgb(88, 253, 88)';
        }
    });

    seat.addEventListener('mouseout', () => {
        if (seat.style.backgroundColor === 'rgb(88, 253, 88)' && !seat.classList.contains('booked')) {
            seat.style.backgroundColor = 'rgb(75, 72, 72)';
        }
    });
});

// ---------------------------------------------------------------------