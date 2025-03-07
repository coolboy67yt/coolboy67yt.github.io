let title = "turtldev.online";
let i = 0;
let isCursor = false;
let isErasing = false;

function updateTitle() {
  if (i === title.length && !isErasing) {
    setTimeout(() => {
      isErasing = true;
    }, 5000); // Wait 5 seconds after finishing typing
  }

  if (isErasing) {
    if (i > 0) {
      i--;
    } else {
      isErasing = false;
    }
  } else {
    if (i < title.length) {
      i++;
    }
  }

  let currentText = title.substring(0, i);
  if (isCursor && i % 2 === 0 && i !== title.length) {
    currentText += "_";
  }

  document.title = currentText;
}

setInterval(updateTitle, 200); // Adjust the interval speed (200ms here)
