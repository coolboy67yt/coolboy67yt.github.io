let originalTitle = document.title;  // Grabbing the original title
let i = 0;
let isCursor = false;

function updateTitle() {
  if (i === originalTitle.length) {
    i = 0; // Reset i to 0 when finished typing
  }

  let currentText = originalTitle.substring(0, i);
  if (isCursor && i % 2 === 0) {
    currentText += "_";
  }

  document.title = currentText;
  i++;
}

setInterval(updateTitle, 200); // Adjust the interval speed (200ms here)
