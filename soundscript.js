// Setting the variables
var track = document.getElementById("track");

var controlBtn = document.getElementById("play-pause");

document.addEventListener("DOMContentLoaded", (event) => {
  const controlBtn = document.getElementById("play-pause");
  let track = document.getElementById("track"),
    duration = track.duration, // Duration of the audio clip
    playhead = document.getElementById("playhead"),
    timeline = document.getElementById("timeline"),
    timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
  source = controlBtn.getAttribute("data-audio");

  if (!track) return;

  // Update the track duration when the track is loaded.
  track.addEventListener(
    "canplaythrough",
    function () {
      duration = track.duration;
    },
    false
  );

  function playPause() {
    null === track.getAttribute("src") ? track.setAttribute("src", source) : "";

    if (track.paused) {
      track.play();
      controlBtn.className = "pause";
    } else {
      track.pause();
      controlBtn.className = "play";
    }
  }

  controlBtn.addEventListener("click", playPause);

  track.addEventListener("ended", function () {
    controlBtn.className = "play";
    track.currentTime = 0; // resets the playhead when audio ends
  });

  track.addEventListener("timeupdate", timeUpdate, false);

  // makes the timeline clickable
  timeline.addEventListener(
    "click",
    function (event) {
      moveplayhead(event);
      track.currentTime = duration * clickPercent(event);
    },
    false
  );

  // Moves playhead to where the mouse is clicked
  function moveplayhead(event) {
    let newMargLeft = event.clientX - getPosition(timeline);

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
      playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
      playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
      playhead.style.marginLeft = timelineWidth + "px";
    }
  }

  function getPosition(el) {
    return el.getBoundingClientRect().left;
  }

  function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
  }

  // Tracks and updates the time
  function timeUpdate() {
    let playPercent = timelineWidth * (track.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";
    scrub.style.width = playPercent + "px";
  }
});