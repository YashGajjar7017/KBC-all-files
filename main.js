burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
login = document.querySelector('.login')
logout = document.querySelector('.logout')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp')
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})

// Set the date we're counting down to
var countDownDate = new Date("40").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for seconds
    var seconds = Math.floor((distance % (1000 * 30)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = seconds + "s";
    const audio = new Audio('KBC Clock.mp3')
    audio.play();

    // If the count down is over, write some text 
    if (distance == 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME-UP";
    }
},1000);


// program 2:
// Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
