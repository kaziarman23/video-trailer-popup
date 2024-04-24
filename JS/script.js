const buttonEl = document.querySelector(".button");
const detailsConteiner = document.querySelector(".details-conteiner");
const videoConteiner = document.querySelector(".video-conteiner");
const iconEl = document.querySelector(".icon");
const videoEl = document.querySelector("video");

buttonEl.addEventListener("click", function () {
    detailsConteiner.style.display = "none";
    videoConteiner.style.display = "flex";
});

iconEl.addEventListener("click", function () {
    detailsConteiner.style.display = "block";
    videoConteiner.style.display = "none";
    videoEl.pause();
    videoEl.currentTime = 0;
});
