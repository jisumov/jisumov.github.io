---
layout: default
---

<style>
#yt-audio-btn {
  width: 50px;    
  height: 50px;
  border-radius: 50%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.5);
  color: white;
  font-size: 22px;
  font-family: Arial, sans-serif;
}
#yt-audio-iframe { display: none; }
</style>

<div id="yt-audio-btn">▶</div>
<iframe 
  id="yt-audio-iframe"
  width="0" height="0"
  src="https://www.youtube.com/embed/0CNPR2qNzxk?enablejsapi=1&controls=0&modestbranding=1&rel=0"
  allow="autoplay; encrypted-media">
</iframe>

<script>
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-audio-iframe');
}

const btn = document.getElementById('yt-audio-btn');
btn.addEventListener('click', () => {
  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
    btn.textContent = '▶';
  } else {
    player.playVideo();
    btn.textContent = '⏸';
  }
});

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);
</script>

# Who Am I
Hey there! I'm José Suárez, a Computer Systems Engineer with **+1 year** of experience in Cybersecurity. Actions speak louder than words, take a look below!

# Projects

## 40:2 Labs
<table>
  <tbody>
    <tr>
      <td><img src="images/40-2-labs/cover.png" /></td>
      <td>40:2 Labs is an initiative to build and document cybersecurity environments from the ground up. Each lab focuses on deploying defensive infrastructure to simulate real-world security operations.</td>
    </tr>
  </tbody>
</table>

👉 [May enter this land, that is protected by polished labs](projects/40-2-labs/index.md)

## Diggy Diggy SOC
<table>
  <tbody>
    <tr>
      <td><img src="images/diggy-diggy-soc.png" /></td>
      <td>Diggy Diggy SOC is a series of walkthroughs focused on analyzing and resolving Security Operations Center (SOC) incidents from platforms like LetsDefend, TryHackMe and Hack The Box.</td>
    </tr>
  </tbody>
</table>

👉 [Face them on the SIEM, you will meet the logs](#)

## KQLhauled
<table>
  <tbody>
    <tr>
      <td><img src="images/kqlhauled.png" /></td>
      <td>KQLhauled is a KC7-based journey that solves cybersecurity challenges using Kusto Query Language (KQL) to investigate simulated incidents and uncover malicious activity from raw data.</td>
    </tr>
  </tbody>
</table>

👉 [Make that alert walk the plank, with a bottle of queries](#)

* * *
_**Inspired by [Hacker Theme](https://github.com/pages-themes/hacker)**_