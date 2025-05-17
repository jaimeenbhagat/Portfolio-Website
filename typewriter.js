const roles = ["Coder", "Front-End Developer", "Python Developer"];
let currentRoleIndex = 0;
let currentCharIndex = 0;
const dynamicText = document.getElementById("dynamic-text");

function typeWriter() {
  if (currentCharIndex < roles[currentRoleIndex].length) {
    dynamicText.innerHTML += roles[currentRoleIndex].charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(typeWriter, 150); // Typing speed
  } else {
    setTimeout(eraseText, 1000); // Wait before erasing
  }
}

function eraseText() {
  if (currentCharIndex > 0) {
    dynamicText.innerHTML = roles[currentRoleIndex].substring(
      0,
      currentCharIndex - 1
    );
    currentCharIndex--;
    setTimeout(eraseText, 100); // Erasing speed
  } else {
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to the next role
    setTimeout(typeWriter, 500); // Pause before typing the next role
  }
}

// Start the effect once the page loads
window.onload = function () {
  typeWriter(); // Trigger the effect
};
