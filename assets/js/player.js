let player, duration = 0, interval;
const btn = document.getElementById('yt-audio-btn');
const timeEl = document.getElementById('yt-timer');

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-audio-iframe', {
    events: {
      'onReady': (e) => {
        player.setVolume(100);
        duration = player.getDuration();
        timeEl.textContent = `0:00 / ${formatTime(duration)}`;
      },
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(e) {
  const icon = btn.querySelector("i");

  if (e.data === YT.PlayerState.PLAYING) {
    duration = player.getDuration();
    icon.className = "fa-solid fa-stop";
    clearInterval(interval);
    interval = setInterval(updateTime, 1000);
  } 
  else if (e.data === YT.PlayerState.PAUSED) {
    icon.className = "fa-solid fa-play";
    clearInterval(interval);
  } 
  else if (e.data === YT.PlayerState.ENDED) {
    icon.className = "fa-solid fa-play";
    clearInterval(interval);
    timeEl.textContent = `0:00 / ${formatTime(duration)}`;
  }
}

btn.addEventListener('click', () => {
  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
});

function updateTime() {
  let current = player.getCurrentTime();
  timeEl.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
}

function formatTime(sec) {
  sec = Math.floor(sec);
  let m = Math.floor(sec / 60);
  let s = sec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);