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
    var increase = 0;
    var userWins = 0;
    var userLosses = 0;
    var userPlays = 0;
    //
    // end of variable initialization

    // display initial text and images
    //
    // display the userScore & targetScore
    $("#userScore").text(userScore);
    $("#targetScore").text(targetScore);
    //
    // display wins & losses
    $("#winLosstext").html(`<p>Wins: ${userWins}</p><p>Losses: ${userLosses}</p>`);
    //
    // display initial encouraging text in the winLoss message area
    $('#winLossmessageText').text(`Can you match the target?`);
    //
    // display the four crystals side by side
    $("#c1").html("<img src='assets/images/crystal1.png' width='150px' class='border img-fluid'>");
    $("#c2").html("<img src='assets/images/crystal2.png' width='150px' class='border img-fluid'>");
    $("#c3").html("<img src='assets/images/crystal3.png' width='150px' class='border img-fluid'>");
    $("#c4").html("<img src='assets/images/crystal4.png' width='150px' class='border img-fluid'>");

    // declare functions
    //
    // the newGame function initializes the game and is called at the end of every game
    // to reset the crystal values, userScore, targetScore, and the increase variable.
    //
    function newGame() {
        // reset the userScore & update display
        userScore = 0;
        $("#userScore").text(userScore);

        // generate a new targetScore & update display 
        targetScore = Math.floor(Math.random() * 102) + 19;
        $("#targetScore").text(targetScore);

        // reset the crystal values to null, not sure if this is necessary
        c1 = null;
        c2 = null;
        c3 = null;
        c4 = null;

        // generate new crystal values
        c1 = Math.floor(Math.random() * 12) + 1;
        c2 = Math.floor(Math.random() * 12) + 1;
        c3 = Math.floor(Math.random() * 12) + 1;
        c4 = Math.floor(Math.random() * 12) + 1;

        // reset the increase value
        increase = 0;

        // reset the userPlays counter
        userPlays = 0;
    }
    //
    //
    // the addCrystalValue function is the main gameplay function. it is called whenever
    // one of the crystals is clicked/tapped. it adds points to the userScore and
    // checks to see if game-ending conditions are met.
    //
    function addCrystalvalue(crystalValue) {
        // uses the parameter data from the on-click event
        // takes the string value and assigns the appropriate numeric value
        if (crystalValue.data.crystal === "c1val") {
            increase = c1;
        }
        else if (crystalValue.data.crystal === "c2val") {
            increase = c2;
        }
        else if (crystalValue.data.crystal === "c3val") {
            increase = c3;
        }
        else if (crystalValue.data.crystal === "c4val") {
            increase = c4;
        }

        // increase the userScore by the clicked-crystal value
        userScore += increase;
        // update the score with the new value
        $("#userScore").text(userScore);
        // increment the userPlays counter
        userPlays++;

        if (userPlays === 1 && (userWins != 0 || userLosses != 0)) {
            // display encouraging text in the winLoss message area after the first play
            // of the 2nd (and following) games
            $('#winLossmessageText').text(`Can you match the new target?`);
        }

        // has the player lost? (their score exceeds the target)
        if (userScore > targetScore) {
            // increment losses by 1
            userLosses++;
            // update winLoss text with new totals
            $("#winLosstext").html(`<p>Wins: ${userWins}</p><p>Losses: ${userLosses}</p>`);
            // display a "you lost" message
            $('#winLossmessageText').text(`Oops, you overshot ${targetScore} by ${userScore-targetScore}. Better luck next time.`);
            //start the next game
            newGame()
        }

        // has the player won? (their score matches the target)
        else if (userScore === targetScore) {
            // increment wins by 1
            userWins++;
            // update winLoss text with new totals
            $("#winLosstext").html(`<p>Wins: ${userWins}</p><p>Losses: ${userLosses}</p>`);
            // display a "you won" message
            $('#winLossmessageText').text(`You matched ${targetScore} exactly! Well done!`);
            //start the next game
            newGame()
        }

        // game allows more points to be added to the userScore as long as neither userScore-if statement is true
        
    }
    
    // initialize the game
    newGame()

    // on-click events for crystal buttons
    // 
    // when crystal buttons are clicked, pass a particular string into the addCrystalvalue
    // function which will be used to appropriately increase the userScore
    //
    // I previously had {crystal: c1}, etc. (not the strings "c1val", etc.) in the eventdata section,
    // thinking it would pass the current value of the crystal into the addCrystalvalue, but this
    // did notupdate with each new game. the value of the crystals was sticky. so i changed it
    // to these string data values that could be assigned the updated c1, c2, etc. values
    // in the addCrystalValue function.
    //
    $("#c1").on("click", {crystal: "c1val"}, addCrystalvalue);
    $("#c2").on("click", {crystal: "c2val"}, addCrystalvalue);
    $("#c3").on("click", {crystal: "c3val"}, addCrystalvalue);
    $("#c4").on("click", {crystal: "c4val"}, addCrystalvalue);


});

