
var myDraggable = Draggable.create(".dragMe", {
    type: 'x',
    bounds: ".container",
});


function checkOverlap() {
    var d1 = document.querySelector(".cir");
    var d2 = document.querySelector(".dragMe");
    var r1 = d1.getBoundingClientRect()
    var r2 = d2.getBoundingClientRect()
    
    if (r1.left < r2.right) {
        document.querySelector("i").style.opacity = 0;
            document.querySelector(".dot").style.backgroundColor= "#fff";
        document.querySelector("#video1").style.opacity = 0;
    } else {
        document.querySelector("i").style.opacity = 1;
        document.querySelector(".dot").style.backgroundColor = "orange";
        document.querySelector("#video1").style.opacity = 1;
    }
}

window.addEventListener('mousemove', checkOverlap);

