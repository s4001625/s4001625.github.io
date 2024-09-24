const myVideo = document.querySelector("#custom-video-player");
console.log(myVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseBtn.addEventListener("click", togglePlay);

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteBtn);

muteUnmuteBtn.addEventListener("click", toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleSound() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar);

myVideo.addEventListener("timeupdate", fillProgress);

function fillProgress() {
  const currentTime = myVideo.currentTime;
  const progress = (currentTime / myVideo.duration) * 100;
  progressBar.style.width = progress + "%";
}
