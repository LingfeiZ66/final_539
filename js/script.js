document.addEventListener("DOMContentLoaded", function() {
    const aboutText = "Welcome to My World of Photography";
    const typingSpeed = 50;
  
    let aboutIndex = 0;
  
    function typeAboutText() {
      if (aboutIndex < aboutText.length) {
        document.getElementById("typing-word").textContent += aboutText.charAt(aboutIndex);
        aboutIndex++;
        setTimeout(typeAboutText, typingSpeed);
      }
    }
  
    typeAboutText();
  });
  