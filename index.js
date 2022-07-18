document.querySelector("img").style.display = "none"
var showing=false;
function button_pressed() {
    if (showing == false) {
        document.querySelector("img").style.display = "block";
        showing = true
    }
    else if (showing == true) {
        document.querySelector("img").style.display = "none";
        showing = false
    }
}