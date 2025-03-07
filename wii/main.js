function updateTime() {
  const timeElement = document.querySelector('.time');
  const dateElement = document.querySelector('.date');
  const now = new Date();
  
  // Get current time in 12-hour format (AM/PM)
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 12-hour format fix
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const timeString = hours + ':' + minutes + ' ' + ampm;
  
  // Get current date (Day and MM/DD)
  const dayOfWeek = now.toLocaleString('en-us', { weekday: 'short' });
  const month = now.getMonth() + 1; // Month is zero-based
  const day = now.getDate();
  const dateString = `${dayOfWeek} ${month}/${day}`;
  
  // Update time and date in HTML
  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

// Update every second
setInterval(updateTime, 1000);

function scaleMenu() {
  const menu = document.querySelector('.wii-menu');
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Calculate the scaling factor
  const scaleX = viewportWidth / menu.offsetWidth;
  const scaleY = viewportHeight / menu.offsetHeight;
  const scale = Math.min(scaleX, scaleY);

  // Apply the scale
  menu.style.transform = `scale(${scale})`;
}

// Run the scaling function on load and resize
window.addEventListener('load', scaleMenu);
window.addEventListener('resize', scaleMenu);
scaleMenu()
