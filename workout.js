document.addEventListener("DOMContentLoaded", function() {
    var info_buttons = document.getElementsByClassName("info_button")

    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    
    for(var i = 0; i < info_buttons.length; i++){
        info_buttons[i].addEventListener("click", function() {
            overlay.style.display = "block";
            popup.style.display = "block";
        });
    }
    
    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
        popup.style.display = "none";
    });
});