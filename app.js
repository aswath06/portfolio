// Typing animation logic
const typedTextElement = document.getElementById("typed-text");
const words = ["Mobile App Developer"," & ", "DevOps Engineer"];
let currentWordIndex = 0;
let currentLetterIndex = 0;
let isTypingComplete = false;

function typeWord() {
  if (!isTypingComplete) {
    const currentWord = words[currentWordIndex];
    if (currentLetterIndex < currentWord.length) {
      typedTextElement.textContent += currentWord[currentLetterIndex];
      currentLetterIndex++;
      setTimeout(typeWord, 100); // Adjust typing speed here (in ms)
    } else {
      // When the first word is typed, move to the next word without deleting the current one
      setTimeout(nextWord, 1000); // Wait for a second before typing the next word
    }
  }
}

function nextWord() {
  // Only move to the next word once the current one is fully typed
  if (currentWordIndex < words.length - 1) {
    currentWordIndex++;
    currentLetterIndex = 0; // Reset letter index for the next word
    setTimeout(typeWord, 1); // Start typing the next word after a brief pause
  } else {
    isTypingComplete = true; // Mark the typing animation as complete
  }
}


// Start the typing animation
typeWord();

// Particle background effect
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, // Number of particles
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": { "value": "#ffffff" },
    "shape": {
      "type": "circle", // Particle shape
      "stroke": { "width": 0, "color": "#000000" },
      "polygon": { "nb_sides": 5 }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": { "enable": false }
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": { "enable": false }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
      "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8 },
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 },
      "remove": { "particles_nb": 2 }
    }
  },
  "retina_detect": true
});

  // Add a click event listener to all sidebar text elements
  document.querySelectorAll(".sidebar p").forEach((text) => {
    text.addEventListener("click", function () {
      // Remove strikethrough from all text elements
      document.querySelectorAll(".sidebar p").forEach((item) => {
        item.style.textDecoration = "none"; // Reset strikethrough
        item.style.color = ""; // Reset text color
      });

      // Add strikethrough and style to the clicked element
      this.style.textDecoration = "line-through";
      this.style.textDecorationColor = "#7084F4"; // Set strikethrough line color to white
      this.style.textDecorationThickness = "5px"; // Make the line thicker (border-like)
      this.style.color = "white"; // Set text color to #7084F4
    });
  });
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  // Update cursor position based on mouse movement
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Move the cursor and apply smooth transition
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    // Optional: Adding a delay for the smooth cursor effect
    setTimeout(() => {
      cursor.style.transform = `translate(-50%, -50%)`;
    }, 10);  // Add small delay to ensure smooth transition
  });