//Business Logic goes here
function Ticket(title, time, type) {
  this.title = title;
  this.time = time;
  this.type = type;
  this.price;
  this.setTicketPrice();
}

Ticket.prototype.yourTicket = function(){
  return this.title + ", " + this.time + ", " + this.price;
}

Ticket.prototype.setTicketPrice = function() {
  if (this.time === "1:00"){
    this.price = "5.00";
  }else if (this.type === "child") {
    this.price = "$5.00";
  } else if (this.type === "senior") {
    this.price = "$8.00";
  } else if (this.type === "adult") {
    this.price = "$12.00";
  };


}


// var senior = { name: "senior ticket", price: 8.00};
// var adult = { name: "adult regular ticket", price: 10.00};
// var matinee = { name: "matinee ticket", price: 5.00};
//
//
// var rambo = { name: "Rambo", times: [3:00, 5:00, 9:30] }
// var blade = { name: "Blade Runner", times: [5:00, 9:30] }
// var fly = { name: "The Fly", times: [3:00] }
//
// var title = { [rambo, blade, fly] }
// var time = { [1:00, 3:00, 5:00, 7:00, 9:30]}
// var type = { [senior, adult, matinee] }

//Interface Logic goes here
$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();

    var checkedMovie = $("select#movie").val();
    var checkedTime = $("select#showtime").val();
    var checkedTicket = $("select#ticket").val();

    var ticket = new Ticket(checkedMovie, checkedTime, checkedTicket)

    $("ul#yourShow").append("<li>" + ticket.yourTicket() + "</span></li>");

  });
});
