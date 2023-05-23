document.addEventListener("DOMContentLoaded", function() {
    var startButton = document.getElementById("startButton");
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    
    startButton.addEventListener("click", function() {
        overlay.style.display = "block";
        popup.style.display = "block";
    });
    
    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
        popup.style.display = "none";
    });
});