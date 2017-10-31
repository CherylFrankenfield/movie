//Business Logic goes here
function Movie(title, time, ticket) {
  this.title = title;
  this.time = time;
  this.ticket = ticket;
}

function Yourshow(title, time)

Movie.prototype.something = function() {
  return this.title + " " + this.time;
}

var senior = { name: "senior ticket", price: 8.00};
var adult = { name: "adult regular ticket", price: 10.00};
var matinee = { name: "matinee ticket", price: 5.00};


var rambo = { name: "Rambo", times: [3:00, 5:00, 9:30] }
var blade = { name: "Blade Runner", times: [5:00, 9:30] }
var fly = { name: "The Fly", times: [3:00] }

var title = { [rambo, blade, fly] }


//Interface Logic goes here
$(document).ready(function() {
  $("#buttonMovie").submit(function(event) {
    event.preventDefault();



  });
});
