document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById("startButton");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    var tip_overlay = document.getElementById("tip_overlay");
    var tip_popup = document.getElementById("tip_popup");
    var notimplemented_overlay = document.getElementById("notimplemented_overlay");
    var notimplemented_popup = document.getElementById("notimplemented_popup");
    
    var tips = document.getElementsByClassName("tip");

    for(var i = 0; i < tips.length; i++){
        tips[i].addEventListener("click", function() {
            tip_overlay.style.display = "block";
            tip_popup.style.display = "block";
        });
    }

    startButton.addEventListener("click", function() {
        overlay.style.display = "block";
        popup.style.display = "block";
    });

    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
        popup.style.display = "none";
    });

    tip_overlay.addEventListener("click", function() {
        tip_overlay.style.display = "none";
        tip_popup.style.display = "none";
    });

    notimplemented_overlay.addEventListener("click", function() {
        notimplemented_overlay.style.display = "none";
        notimplemented_popup.style.display = "none";
    });
});

function change_workout(){
    notimplemented_overlay.style.display = "block";
    notimplemented_popup.style.display = "block";
}