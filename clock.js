function updateTime() {
    // Get the current time
    const now = new Date();
  
    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Format hours, minutes, and seconds as strings with leading zeros
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
  
    // Display the time in the clock div
    const clockDiv = document.getElementById('clock');
    clockDiv.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
  
  // Call updateTime every second to update the clock
  setInterval(updateTime, 1000);
  
  // Initialize the clock on page load
  updateTime();