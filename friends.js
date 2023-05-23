document.addEventListener("DOMContentLoaded", function() {
    var profiles = document.getElementsByClassName("friend")

    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    
    for(var i = 0; i < profiles.length; i++){
        profiles[i].addEventListener("click", function() {
            overlay.style.display = "block";
            popup.style.display = "block";
        });
    }
    
    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
        popup.style.display = "none";
    });
});