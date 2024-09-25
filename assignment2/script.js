const myVideo = document.querySelector("#custom-video-player");
console.log(myVideo);
const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);
const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);
const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteBtn);
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);
const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar);
const step1Btn = document.querySelector("#step-1-btn");
console.log(step1Btn);
const step2Btn = document.querySelector("#step-2-btn");
console.log(step2Btn);
const step3Btn = document.querySelector("#step-3-btn");
console.log(step3Btn);
const step4Btn = document.querySelector("#step-4-btn");
console.log(step4Btn);
const step5Btn = document.querySelector("#step-5-btn");
console.log(step5Btn);
const step6Btn = document.querySelector("#step-6-btn");
console.log(step6Btn);
const step7Btn = document.querySelector("#step-7-btn");
console.log(step7Btn);
const step8Btn = document.querySelector("#step-8-btn");
console.log(step8Btn);
const step9Btn = document.querySelector("#step-9-btn");
console.log(step9Btn);
const step10Btn = document.querySelector("#step-10-btn");
console.log(step10Btn);

playPauseBtn.addEventListener("click", togglePlay);
muteUnmuteBtn.addEventListener("click", toggleSound);
myVideo.addEventListener("timeupdate", fillProgress);
myVideo.addEventListener("dblclick", toggleFullScreen);
step1Btn.addEventListener("click", gotoStep1);
step2Btn.addEventListener("click", gotoStep2);
step3Btn.addEventListener("click", gotoStep3);
step4Btn.addEventListener("click", gotoStep4);
step5Btn.addEventListener("click", gotoStep5);
step6Btn.addEventListener("click", gotoStep6);
step7Btn.addEventListener("click", gotoStep7);
step8Btn.addEventListener("click", gotoStep8);
step9Btn.addEventListener("click", gotoStep9);
step10Btn.addEventListener("click", gotoStep10);

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

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

function fillProgress() {
  const currentTime = myVideo.currentTime;
  const progress = (currentTime / myVideo.duration) * 100;
  progressBar.style.width = progress + "%";
}

function toggleFullScreen() {
  console.log("video is double clicked");
  if (!document.fullscreenElement) {
    // ! - not
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function gotoStep1() {
  myVideo.currentTime = 14.1;
}

function gotoStep2() {
  myVideo.currentTime = 30.1;
}

function gotoStep3() {
  myVideo.currentTime = 41.1;
}

function gotoStep4() {
  myVideo.currentTime = 63.1;
}
