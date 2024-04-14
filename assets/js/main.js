let playIcon = document.querySelector(".bi-play-circle");
let video = document.querySelector("video");

if (playIcon) {
    playIcon.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            video.style.display = "unset";
            playIcon.classList.remove("bi-play-circle");
            playIcon.classList.add("bi-pause-circle");
        } else {
            video.pause();
            video.style.display = "none";
            playIcon.classList.add("bi-play-circle");
            playIcon.classList.remove("bi-pause-circle");
        }
    });
}
