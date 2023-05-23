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

function check_checkboxes() {
    var checkboxes = document.getElementsByClassName("checkbox")

    for(var i = 0; i < checkboxes.length; i++){
        if(!checkboxes[i].checked) return;
    }

    document.getElementById("done_overlay").style.display = "block";
    document.getElementById("done_popup").style.display = "flex";
}