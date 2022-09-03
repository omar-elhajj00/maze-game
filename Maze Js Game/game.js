//execute when the window finish , wait the window to load
window.onload = function () {
    var mousePosition;
    // var offset = [0,0];
    var isDown = false;
    var m = document.getElementById('start');

    // document.body.appendChild(m);

    m.addEventListener('mousedown', function(e) {
        isDown = true;
        offset = [
            m.offsetLeft - e.clientX,
            m.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function() {
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function(event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x : event.clientX,
                y : event.clientY

            };
            m.style.left = (mousePosition.x + offset[0]) + 'px';
            m.style.top  = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
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
