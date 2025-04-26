document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
  
    const galleryImages = document.querySelectorAll('.lightbox-img');
    let currentIndex = 0;
  
    galleryImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        captionText.textContent = img.alt;
        currentIndex = index;
      });
    });
  
    closeBtn.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      updateLightbox();
    });
  
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % galleryImages.length;
      updateLightbox();
    });
  
    function updateLightbox() {
      lightboxImg.src = galleryImages[currentIndex].src;
      captionText.textContent = galleryImages[currentIndex].alt;
    }
  });
  