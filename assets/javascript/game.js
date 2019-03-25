// js for Crystal Collector game
// will use jQuery

// wait until the html is loaded
$(document).ready(function() {
    // initialize variables
    var targetScore = null;
    var userScore = 0;
    var c1 = null;
    var c2 = null;
    var c3 = null;
    var c4 = null;
    var userWins = 0;
    var userLosses = 0;

    // display the userScore on the screen
    $("#score").text(userScore);
    $("#targetScore").text(targetScore);
    $("#winsText").text(`Wins: ${userWins}`);
    $("#lossesText").text(`Losses: ${userLosses}`);

    // target the crystal area and set the images in place side by side
    $("#c1").html("<img src='assets/images/crystal1.png' width='150px' class='border img-fluid'>");
    $("#c2").html("<img src='assets/images/crystal2.png' width='150px' class='border img-fluid'>");
    $("#c3").html("<img src='assets/images/crystal3.png' width='150px' class='border img-fluid'>");
    $("#c4").html("<img src='assets/images/crystal4.png' width='150px' class='border img-fluid'>");

    // declare functions
    //
    // increase the userScore when a crystal is clicked
    function newGame() {
        // reset the userScore
        userScore = 0;
        $("#score").text(userScore);
        // generate a new targetScore
        targetScore = Math.floor(Math.random() * 102) + 19;
        $("#targetScore").text(targetScore);
        // generate new crystal values
        c1 = Math.floor(Math.random() * 12) + 1;
        c2 = Math.floor(Math.random() * 12) + 1;
        c3 = Math.floor(Math.random() * 12) + 1;
        c4 = Math.floor(Math.random() * 12) + 1;
        console.log(c1);
        console.log(c2);
        console.log(c3);
        console.log(c4);

    }
    
    // need to update this value because c1 console logs accurately but crystalValue
    // is still lingering from the first generated value
    function addCrystalvalue(crystalValue) {
        // takes the parameter data from the on-click event
        console.log(c1);
        userScore += crystalValue.data.crystal;
        // update the score with the new value
        $("#score").text(userScore);

        if (userScore > targetScore) {
            userLosses++;
            $("#lossesText").text(`Losses: ${userLosses}`);
            //start the next game
            newGame()
        }

        // check to see if the player has won
        else if (userScore === targetScore) {
            userWins++;
            $("#winsText").text(`Wins: ${userWins}`);
            //start the next game
            newGame()
        }
        
    }
    
    // generate a random target score for the game
    //targetScore = Math.floor(Math.random() * 102) + 19;
    //$("#targetScore").text(targetScore);


    // generate random values for the four crystals for the game
    // (to be regenerated when the game restarts)
    // c1 = Math.floor(Math.random() * 12) + 1;
    // c2 = Math.floor(Math.random() * 12) + 1;
    // c3 = Math.floor(Math.random() * 12) + 1;
    // c4 = Math.floor(Math.random() * 12) + 1;
    

    newGame()

    // on-click events for crystal buttons
    // when the crystal is clicked, pass the current value of the crystal into the addCrystalvalue fn
    $("#c1").on("click", {crystal: c1}, addCrystalvalue);
    $("#c2").on("click", {crystal: c2}, addCrystalvalue);
    $("#c3").on("click", {crystal: c3}, addCrystalvalue);
    $("#c4").on("click", {crystal: c4}, addCrystalvalue);

    


    
    // if userScore < targetScore, let buttons add value to userScore

    // if userScore > targetScore, player loses
    // increment userLosses

    





});

