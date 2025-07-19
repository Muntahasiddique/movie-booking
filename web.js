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
// main code....................
// url in string
// let url  = window.location.href;
// // console.log(url);
// let urlsegment =url.split('?');
// // console.log(urlsegment[1]);

// //...............play btn..................
// let playbtn=document.getElementById('play');
// let vedio=document.getElementById('right-vedio-id');
// playbtn.addEventListener('click',()=>{
//     if(vedio.paused){
//         vedio.play();
//         vedio.style.display='unset';
//         playbtn.classList.remove('fa-play');
//         playbtn.classList.add('fa-pause');
//     }
//     else{
//         vedio.pause();
//         vedio.style.display='none';
//         playbtn.classList.add('fa-play');
//         playbtn.classList.remove('fa-pause');


//     }
// })
// vedio.addEventListener('ended',()=>{
//     vedio.play();
// })
// // fixing date
// let date=new Date();
// let maindate=date.getDate();
// Array.from(document.getElementsByClassName('datepoint')).forEach((el)=>{
//     if(el.innerText == maindate){
//         el.classList.add('h6-active')
//     }
// })
// // already made array
// let pvr = [
//     {
//       pvr: 'PVR Vegus',
//       movie: 'Jawan',
//       loc: 'Dwarka Sector 14, New Delhi',
//       audi: 1,
//       type: '4DX',
//       series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
//       row_section: 3,
//       seat: 24,
//       j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
//       h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
//       f: [5, 6, 15, 17, 18],
//       e: [2, 7, 8, 17, 18],
//       d: [5, 16, 15, 23, 22],
//       c: [1, 2, 11, 12, 19],
//       b: [8, 5],
//       a: [],
//       price: [800, 800, 560, 560, 560, 430, 430],
//       date: 29
//     },
//     {
//       pvr: 'PVR Vegus',
//       movie: 'Jawan',
//       loc: 'Dwarka Sector 14, New Delhi',
//       audi: 2,
//       type: '4DX',
//       series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
//       row_section: 3,
//       seat: 24,
//       j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
//       h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
//       f: [1, 3, 13, 15, 22],
//       e: [3, 9, 10, 20, 24],
//       d: [7, 12, 9, 21, 20],
//       c: [6, 8, 11, 12, 19],
//       b: [8, 5, 12, 13, 14],
//       a: [],
//       price: [800, 800, 560, 560, 560, 560, 430, 430, 430],
//       date: 29
//     }
//   ];
//   let data =pvr.filter(obj => obj.data == maindate && obj.movie == urlsegment[1])
//   console.log(data);
// Get the URL and split it by '?'
let url = window.location.href;
let urlSegment = url.split('?');

// Extract the movie name from URL parameters
let movieName = decodeURIComponent(urlSegment[1] || "").trim();

// Debugging: Log the extracted movie name
console.log("Extracted movie name from URL:", movieName);

// Play button functionality
let playBtn = document.getElementById('play');
let video = document.getElementById('right-vedio-id');
playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.style.display = 'unset';
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    } else {
        video.pause();
        video.style.display = 'none';
        playBtn.classList.add('fa-play');
        playBtn.classList.remove('fa-pause');
    }
});
video.addEventListener('ended', () => {
    video.play();
});

// Fixing the date
let date = new Date();
let mainDate = date.getDate();
Array.from(document.getElementsByClassName('datepoint')).forEach((el) => {
    if (parseInt(el.innerText) === mainDate) {
        el.classList.add('h6-active');
    }
});

// Predefined array of PVR data
let pvr = [
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 78, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 16, 15, 23, 22],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 430, 430],
        date: 30
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
        h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
        f: [1, 3, 13, 15, 22],
        e: [3, 9, 10, 20, 24],
        d: [7, 12, 9, 21, 20],
        c: [6, 8, 11, 12, 19],
        b: [8, 5, 12, 13, 14],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430, 430],
        date: 30
    }
];

// Debugging: Log the current date and the data in pvr array
console.log("Current date:", mainDate);
console.log("PVR data:", pvr);

// Filter the pvr data based on the current date and movie name
let filteredData = pvr.filter(obj => {
    console.log(`Checking: Date=${obj.date}, Movie=${obj.movie}`);
    return obj.date === mainDate && obj.movie.toLowerCase() === movieName.toLowerCase();
});

// Debugging: Log the filtered data
console.log("Filtered data:", filteredData);
// seat
let addseats =(arr)=>{
   arr.forEach((el,i)=>{
    const {series, row_section,seat,price,a,b,c,d,e,f,h,j}=el;
    // create row
    for(let index =0;index<series.length;index++){
        let row=document.createElement('div');
        chair.className='chair';
        let booked_seats =[];
        booked_seats=[...eval(series[index].toLocaleLowerCase)];
        console.log(booked_seats);


        // create seats
        for (let seats = 0; seats <  seat; seats++) {
           
            let li=document.createElement('li');
             let filter=booked_seats.filter(el=>{
                return el === seats;
             })
            //  console.log(filter);
            if (filter.length>0){
                li.className = "seat booked";

            }
            else{
                li.className="seat";
            }
            row.appendChild(li);
            document.getElementById('chair').appendChild(chair);
        }
    }
   })

}

//--------------------
// Get references to the buttons and sections
let reverseBtn = document.getElementById('reverse-btn');
let reverseBtnLeft = document.getElementById('reverse-btn-left');
let chairSetup = document.getElementById('chair');
let tickets = document.getElementById('tickets');

reverseBtn.addEventListener('click', () => {
    // Hide the chair setup div
    chairSetup.style.display = 'none';

    // Show the tickets div
    tickets.style.display = 'block';

    // Hide the reverse button and show the reverse-btn-left button
    reverseBtn.style.display = 'none';
    reverseBtnLeft.style.display = 'block';
});

reverseBtnLeft.addEventListener('click', () => {
    // Show the chair setup div
    chairSetup.style.display = 'block';

    // Hide the tickets div
    tickets.style.display = 'none';

    // Show the reverse button and hide the reverse-btn-left button
    reverseBtn.style.display = 'block';
    reverseBtnLeft.style.display = 'none';
});
