for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var soundFile = this.getAttribute("data-sound");
        if (soundFile) {
            var audio = new Audio(soundFile);
            audio.play();
        }
    });
}
