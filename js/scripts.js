$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var season = parseInt($("#horoscope").val());

    if (age){ 
      if (age > 0 && age < 12) {
        alert("Go play outside!");
      } else if (age > 12 && age < 18) {
        alert("Do your homework!");
      } else if (age >= 18) {
        alert("cool");
      } 
    } else {
        $("#age-error").append("Please fill in your age.");
      }
    //   } else if (season === 1){
    //   alert("Jennifer Lopez");
    // } else if (season === 2) {
    //   alert("Matt Damon");
    // } else if (season === 3) {
    //   alert("Your mom");
    // } else if (season === 4) {
    //   alert("A banana");
    // } else {
      
    // }
    event.preventDefault();
  });
});