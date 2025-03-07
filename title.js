let originalTitle = document.title;  // Grabbing the original title
let i = 0;

function updateTitle() {
  if (i === originalTitle.length) {
    clearInterval(interval); // Stop the interval once the title is fully typed
    return;
  }

  let currentText = originalTitle.substring(0, i);
  if (i % 2 === 0 && i !== originalTitle.length) {
    currentText += "_"; // Add underscore as a cursor after every even character, except at the end
  }

  document.title = currentText;
  i++;
}

let interval = setInterval(updateTitle, 200); // Adjust the interval speed (200ms here)
