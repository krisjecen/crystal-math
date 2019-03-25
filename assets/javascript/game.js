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

    // display the userScore on the screen
    $("#userScore").text(userScore);
    $("#targetScore").text(targetScore);
    //$("#winLosstext").text(`Wins: ${userWins} Losses: ${userLosses}`);
    $("#winLosstext").html(`<p>Wins: ${userWins}</p><p>Losses: ${userLosses}</p>`);


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
        $("#userScore").text(userScore);
        // generate a new targetScore
        targetScore = Math.floor(Math.random() * 102) + 19;
        $("#targetScore").text(targetScore);
        // generate new crystal values
        c1 = null;
        c2 = null;
        c3 = null;
        c4 = null;
        c1 = Math.floor(Math.random() * 12) + 1;
        c2 = Math.floor(Math.random() * 12) + 1;
        c3 = Math.floor(Math.random() * 12) + 1;
        c4 = Math.floor(Math.random() * 12) + 1;
        console.log(c1);
        console.log(c2);
        console.log(c3);
        console.log(c4);

        increase = 0;
    }
    
    // need to update this value because c1 console logs accurately but crystalValue
    // is still lingering from the first generated value
    function addCrystalvalue(crystalValue) {
        // takes the parameter data from the on-click event
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
        // increase the userScore by the appropriate crystal value
        userScore += increase;
        // update the score with the new value
        $("#userScore").text(userScore);

        if (userScore > targetScore) {
            userLosses++;
            $("#winLosstext").html(`<p>Wins: ${userWins}</p><p>Losses: ${userLosses}</p>`);
            //start the next game
            newGame()
        }

        // check to see if the player has won
        else if (userScore === targetScore) {
            userWins++;
            $("#winLosstext").html(`<p>Wins: ${userWins}</p><p>Losses: ${userLosses}</p>`);
            //start the next game
            newGame()
        }
        
    }
    
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

