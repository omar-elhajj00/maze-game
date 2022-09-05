//execute when the window finish , wait the window to load
window.onload = function () {

    var game = document.getElementById("game");
    var start = document.getElementById("start");
    var enda = document.getElementById("end"); 
    var loseOrwin=document.getElementById("status")
    var score = 0;
    var scoreArea = document.getElementsByTagName("p")[1];
    var boundaries = document.getElementsByClassName("boundary");
    var startButton = document.getElementsByClassName('boundary')[5];
    var starb = document.getElementsByClassName("boundary example")[0];


    start.addEventListener("mouseenter", enterTheNarrowArea);

    start.addEventListener("mouseleave", changeTheSColor);

    start.addEventListener("click", reset);

    // get game over if the cursor touch any wall
    function enterTheNarrowArea() {
        for (var i = 0; i < boundaries.length-1;i++){
            boundaries[i].addEventListener("mouseover", gameOver);
        }
        enda.addEventListener("mouseenter", winner);
    }

    //change the start button color when the cursor pass it
    function changeTheSColor() {
        start.style.backgroundColor = 'yellow';
        enda.startEventListener("mouseleave", winner);
    }

    // function about the changes happen if the user passed the area successfully
    function winner() { 
        loseOrwin.innerHTML = "YOU WIN! CONGRATULATION !"
        score += 5;
        
        for (var i = 0; i < boundaries.length-1;i++){
            boundaries[i].style.backgroundColor = "green";
        };
        for (var i = 0; i < boundaries.length-1;i++){
            boundaries[i].removeEventListener("mouseover", gameOver);
        }
        scoreArea.innerHTML = 'Your Score is :' + score; 
        startButton.innerHTML = "Start";
        enda.removeEventListener("mouseenter", winner);
        start.removeEventListener("mouseenter", enterTheNarrowArea);
        startAgain();   
    }

    // function if the user lost
    function gameOver() {
        for (var i = 0; i < boundaries.length-1;i++){ //make the boudaries red
            boundaries[i].style.backgroundColor = "red";
        }
        enda.removeEventListener("mouseenter", winner); //remove the winner event
        for (var i = 0; i < boundaries.length-1;i++){
            boundaries[i].removeEventListener("mouseover", gameOver);
        }
        loseOrwin.innerHTML = "YOU LOST! HARD LUCK";
        startButton.innerHTML = "Start"; 
        startButton.style.padding = "0rem auto";
        if (score <= 4) {
            score = 0;
        }
        else {
            score -= 5;
        }
        scoreArea.innerHTML = 'Your Score is :' + score;  
        startAgain();
    }

    // reset and refresh
    function reset() {
        document.location.reload();  
    }
    
    //function to start after losing or winning
    function startAgain() {

        startButton.addEventListener("mouseover", function () { 
            startButton.style.cursor = "pointer";
        });

        startButton.addEventListener('click', function () {
            
            start.addEventListener("mouseenter", enterTheNarrowArea);
            loseOrwin.innerHTML = 'Begin by moving your mouse over the "S".';
            for (var i = 0; i < boundaries.length-1;i++){ //make the boudaries red
            boundaries[i].style.backgroundColor = "#eeeeee";
        }
            for (var i = 0; i < boundaries.length-1 ; i++){
                boundaries[i].removeEventListener("mouseover", gameOver);
            }
            scoreArea.innerHTML = 'Your Score is :' + score; 
            startButton.innerHTML = "";
            start.style.backgroundColor = "green";
            
        });
        
    }
}
