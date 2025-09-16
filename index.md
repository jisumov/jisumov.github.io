---
layout: default
---

<style>
/* circle play button (80x80) */
.yt-play-btn {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  display: inline-block;
  background: #000; /* fallback background */
  box-shadow: 0 2px 6px rgba(0,0,0,0.5);
}

/* iframe is standard 560x315 and moved so its CENTER is visible */
.yt-play-btn iframe {
  width: 560px;
  height: 315px;
  border: 0;
  margin-left: -240px;   /* <- see math below */
  margin-top:  -117.5px; /* <- see math below */
  display: block;
}
</style>

<div class="yt-play-btn" title="Play">
  <iframe
    src="https://www.youtube.com/embed/o1tj2zJ2Wvg?autoplay=0&controls=0&modestbranding=1&rel=0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
  </iframe>
</div>

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