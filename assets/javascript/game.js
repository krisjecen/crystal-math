// js for Crystal Collector game
// will use jQuery

// wait until the html is loaded
$(document).ready(function() {
    // initialize variables
    var targetScore = null;
    var userScore = 69;
    var c1 = null;
    var c2 = null;
    var c3 = null;
    var c4 = null;
    var userWins = 0;
    var userLosses = 0;
    var x = null;

    // display the userScore on the screen
    $("#score").text(userScore);

    // target the crystal area and set the images in place side by side
    $("#c1").html("<img src='assets/images/crystal1.png' width='150px' class='border img-fluid'>");
    $("#c2").html("<img src='assets/images/crystal2.png' width='150px' class='border img-fluid'>");
    $("#c3").html("<img src='assets/images/crystal3.png' width='150px' class='border img-fluid'>");
    $("#c4").html("<img src='assets/images/crystal4.png' width='150px' class='border img-fluid'>");
    
    // generate random values for the four crystals for the game (to be regenerated
    // when the game restarts)
    c1 = 6;
    c2 = 5;
    c3 = 2;
    c4 = 10;
    

    // on-click events for crystal buttons
    // when the crystal is clicked, pass the current value of the crystal into the addCrystalvalue fn
    $("#c1").on("click", {crystal: c1}, addCrystalvalue);
    $("#c2").on("click", {crystal: c2}, addCrystalvalue);
    $("#c3").on("click", {crystal: c3}, addCrystalvalue);
    $("#c4").on("click", {crystal: c4}, addCrystalvalue);

    //increase the userScore when a crystal is clicked
    function addCrystalvalue(crystalValue) {
        // takes the parameter data from the on-click event
        userScore += crystalValue.data.crystal;
        console.log(userScore);
        $("#score").text(userScore);
    }


    // function addCrystalvalue(crystalValue) {
    //     userScore += crystalValue;
    //     console.log(userScore);
    //     $("#score").text(userScore);
    // }

    // if userScore < targetScore, let buttons add value to userScore

    // when a crystal is clicked, add its value to the userScore
    // and update the userScore

    // if userScore === targetScore, player wins
    // increment userWins

    // if userScore > targetScore, player loses
    // increment userLosses

    





});

