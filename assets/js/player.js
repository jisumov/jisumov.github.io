let player, duration = 0, interval;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-audio-iframe', {
    events: {
      'onReady': (e) => {
        duration = player.getDuration();
        document.getElementById("yt-time").textContent = `0:00 / ${formatTime(duration)}`;
      }
    }
  });
}

const btn = document.getElementById('yt-audio-btn');
const timeEl = document.getElementById('yt-time');

btn.addEventListener('click', () => {
  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
    btn.textContent = '▶';
    clearInterval(interval);
  } else {
    player.playVideo();
    btn.textContent = '⏸';
    interval = setInterval(updateTime, 1000);
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