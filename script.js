document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const menuWrapper = document.querySelector('.menu-wrapper');
    const navBackground = document.querySelector('.nav-background');

    // Toggle menu and background on click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        navBackground.classList.toggle('open'); // Toggle background
    });

    // Close the menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!menuWrapper.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            navBackground.classList.remove('open'); // Hide background
        }
    });

});

// // Code for the canvas animations
// function files(index) {
//     return `new Scroll/out-Drone_${1000 + index}.jpg`;
// }

// const frameCount = 230;
// const images = [];
// const imageSeq = { frame: 0 };

// const canvas = document.querySelector("#home > canvas");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// window.addEventListener("resize", function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
// });

// // Load images directly from the path
// for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = files(i);
//     img.onload = function() {
//         images.push(img);
//         if (i === 0) { // Render the first frame once the first image is loaded
//             render();
//         }
//     };
// }

// gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: "none",
//     scrollTrigger: {
//         scrub: 1.8,
//         pin: true,
//         trigger: "#home",
//     },
//     onUpdate: render
// });

// function render() {
//     scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
//     var canvas = ctx.canvas;
//     var hRatio = canvas.width / img.width;
//     var vRatio = canvas.height / img.height;
//     var ratio = Math.max(hRatio, vRatio);
//     var centerShift_x = (canvas.width - img.width * ratio) / 2;
//     var centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0, img.width, img.height,
//         centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
// }

// ScrollTrigger.create({
//     trigger: "#home",
//     pin: true,
//     start: "top top",
//     scrub: 1.8
// });

const slides = document.querySelectorAll('.slides img');
    const dots = document.querySelectorAll('.dot');
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const h1Title = document.getElementById('slide-title');
    const h2Description = document.getElementById('slide-description');

    // Titles and Descriptions for each slide
    const titles = [
      "Siddhraj Zoey", "Siddhraj Z²", "Siddhraj Z+", "Siddhraj Zavod", "Siddhraj Zold", "Siddhraj Zori", "Siddhraj Greens"
    ];

    const descriptions = [
      "Contemporary Comfort with Integrated Green Living", 
  "Elevating Workspaces, Redefining Green Spaces.", 
  "A Fusion of Tradition and Modernity for Secure Living", 
  "Innovative Business Park for Dynamic Work Environments", 
  "Luxury Living in a Harmonious Blend of Nature and Sophistication", 
  "Strategically Designed Spaces for Optimal Commercial Success", 
  "Environmentally Conscious and Sustainable Development"
    ];

    // Links for "More Info" buttons
    const moreInfoLinks = [
      "/sub-pages/zoey/index.html", "sub-pages/z2/index.html", "sub-pages/z+/index.html", "sub-pages/zavod/index.html", "sub-pages/zold/index.html", "sub-pages/zori/index.html", "sub-pages/Greens/index.html"
    ];

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlide(index) {
      // Hide all slides
      slides.forEach(slide => slide.classList.remove('active'));
      // Remove active class from all dots
      dots.forEach(dot => dot.classList.remove('active'));

      // Show the current slide
      slides[index].classList.add('active');
      dots[index].classList.add('active');

      // Update h1 and h2 text
      h1Title.textContent = titles[index];
      h2Description.textContent = descriptions[index];

      // Update the More Info button's link
      moreInfoBtn.href = moreInfoLinks[index];
    }

    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide(currentIndex);
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide(currentIndex);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlide(currentIndex);
      });
    });

    function autoSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide(currentIndex);
    }

    setInterval(autoSlide, 5000); // Slide every 5 seconds

    // Initialize the first slide
    updateSlide(0);






    let hasZoomedIn = false; // Track if the second image has fully zoomed in
    let zoomingOut = false; // Track if zoom-out has started
    let zoomDelayTimeout; // Timeout for delaying the zoom effect
    
    window.addEventListener('scroll', function () {
        const secondImage = document.getElementById('second-image');
        const allImages = document.querySelectorAll('.homepage-sec3 img');
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const endSection = document.querySelector('.end-section');
        const nextDiv = document.querySelector('.next-div');
        const endSectionRect = endSection.getBoundingClientRect();
    
        // Check if the end section is in the viewport to start the zoom-in effect
        if (endSectionRect.top < viewportHeight && endSectionRect.bottom > 0 && !zoomingOut) {
            clearTimeout(zoomDelayTimeout); // Clear previous timeout to avoid overlap
    
            zoomDelayTimeout = setTimeout(() => {
                // Zoom from the original size of the image
                secondImage.style.transition = 'transform 2s ease 0.5s'; // Smooth zoom-in with delay
                secondImage.style.transform = 'scale(1)';  // Zoom to 2x (or adjust as needed)
    
                // Shrink and fade out other images
                allImages.forEach((img) => {
                    if (img !== secondImage) {
                        img.style.transform = 'scale(0)'; // Shrink other images to 0
                        img.style.opacity = '0'; // Fade out other images
                        img.style.transition = 'transform 2s ease 0.5s, opacity 2s ease 0.5s'; // Smooth with delay
                    }
                });
    
                if (!hasZoomedIn) {
                    // Fix the second image in place once it's zoomed in
                    secondImage.style.position = 'fixed';
                    secondImage.style.top = '0';
                    secondImage.style.left = '0';
                    secondImage.style.width = '100vw';  // Ensure it covers the entire screen
                    secondImage.style.height = '100vh';
                    secondImage.style.objectFit = 'cover';  // Maintain aspect ratio
                    secondImage.style.zIndex = '10';
                    hasZoomedIn = true;
                }
            }, 500); // Delay the zoom animation by 0.5 seconds
        }
    
        // Check if the user scrolls past and initiate zoom-out
        if (hasZoomedIn && endSectionRect.bottom < 0) {
            zoomingOut = true; // Set zoom-out flag
    
            clearTimeout(zoomDelayTimeout); // Clear the delay when zooming out
    
            // Apply zoom-out to the second image with smooth animation
            secondImage.style.transition = 'transform 2s ease 0.5s'; // Smooth zoom-out with delay
            secondImage.style.transform = 'scale(1)'; // Reset to original size
            secondImage.style.position = 'absolute'; // Remove fixed positioning
            secondImage.style.top = ''; // Reset top
            secondImage.style.left = ''; // Reset left
            secondImage.style.width = '60vw'; // Reset the original width
            secondImage.style.height = 'auto'; // Reset height
            secondImage.style.zIndex = '1'; // Reset z-index
    
            // Bring back the other images
            allImages.forEach((img) => {
                img.style.transform = 'scale(1)';
                img.style.opacity = '1';
                img.style.transition = 'transform 2s ease 0.5s, opacity 2s ease 0.5s'; // Smooth reset
            });
    
            // Once zoom-out completes, reset the zoom state
            setTimeout(() => {
                zoomingOut = false;
                hasZoomedIn = false; // Reset the zoom state
            }, 1000); // Delay ensures smooth reset after zoom-out
        }
    
        // Update last scroll position
        window.lastScrollTop = window.scrollY || document.documentElement.scrollTop;
    });
 
// JavaScript to toggle the active class for each hero section


