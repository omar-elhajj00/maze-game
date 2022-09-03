//execute when the window finish , wait the window to load
window.onload = function () {



    var game = document.getElementById("game");
    var start = document.getElementById("start");
    var score = 0;
    var boundaries = document.getElementsByClassName("boundary");
    startButton = document.getElementsByClassName('boundary')[5];
    b = Array.from(boundaries);
    var lost = false;

    start.addEventListener("mouseenter", enterTheNarrowArea);
    

    function enterTheNarrowArea() {
        for (var i = 0; i < boundaries.length-1;i++){
            boundaries[i].addEventListener("mouseover", gameOver);
        }
    }

    function gameOver() {
        for (var i = 0; i < boundaries.length-1;i++){
            boundaries[i].style.backgroundColor = "red";
        }
        startButton.innerHTML = "Reset";
        startButton.style.padding = "0rem auto";
        
    }
    function reset() {
        
    }


    // function gameOver() {
    //     document.write('<form style><h3>Game Over</h3><form>')
    // }
    // // var mousePosition;
    // // var offset = [0,0];
    // var isDown = false;
    // var m = document.getElementById('start');

    // // document.body.appendChild(m);

    // m.addEventListener('mousedown', function(e) {
    //     isDown = true;
    //     offset = [
    //         m.offsetLeft - e.clientX,
    //         m.offsetTop - e.clientY
    //     ];
    // }, true);

    // document.addEventListener('mouseup', function() {
    //     isDown = false;
    // }, true);

    // document.addEventListener('mousemove', function(event) {
    //     event.preventDefault();
    //     if (isDown) {
    //         mousePosition = {

    //             x : event.clientX,
    //             y : event.clientY

    //         };
    //         m.style.left = (mousePosition.x + offset[0]) + 'px';
    //         m.style.top  = (mousePosition.y + offset[1]) + 'px';
    //     }
    // }, true);





    // var m = document.getElementById('start');
    // m.addEventListener('mousedown', mouseDown, false);
    // window.addEventListener('mouseup', mouseUp, false);

    // function mouseUp() {
    //     window.removeEventListener('mousemove', move, true);

    // }

    // function mouseDown(e) {
    //     window.addEventListener('mousemove', move, true);
    // }

    // function move(e) {
    //     m.style.top = e.clientY + 'px';
    //     m.style.left = e.clientX + 'px';
    // };
}
