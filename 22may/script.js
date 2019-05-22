var image = document.querySelector("#image");
var picture = document.querySelector(".picture");
var top_a = 0;
var left_a = 0;
document.body.addEventListener("keydown", function (ev) {
    if (ev.which == 37) {

        if (image.style.left = left_a > 0) {
            left_a -= 10;

        }
    }
    if (ev.which == 38) {
        if (image.style.top = top_a > 0) {
            top_a -= 10;

        }
    }
    if (ev.which == 39) {
        if (image.style.left = left_a < 500) {
            left_a += 10;
        }
    }
    if (ev.which == 40) {
        if (image.style.left = top_a < 420) {
            top_a += 10;
        }
    }


    image.style.left = left_a + "px";
    image.style.top = top_a + "px";

})