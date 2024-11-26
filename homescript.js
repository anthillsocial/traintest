//setting the date and time
function updateDateTime() {
  const now = new Date();

  const currentDateTime = now.toLocaleString();

  document.querySelector("#datetime").textContent = currentDateTime;
}

// update time and date every second
setInterval(updateDateTime, 1000);
