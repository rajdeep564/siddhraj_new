
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

function downloadPDF() {
  // Replace 'your-file-id' with the actual Google Drive file ID
  const fileID = 'your-file-id';
  const downloadLink = `https://drive.google.com/file/d/1wtTTC1bolSCuHTSrYd9eYRuaUnorx3Uf/view?usp=sharing=${fileID}`;
  window.open(downloadLink, '_blank');
}















function sequence_animation() {
  const canvas = document.querySelector('#canvas');
  const context = canvas.getContext('2d');

  // Set canvas to the viewport dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Resize canvas on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  // Define the path to images
  function files(index) {
    return `./scroll/frame${index}.jpg`; // Adjusted to match naming from frame0.jpg to frame209.jpg
  }

  const frameCount = 210; // Total number of frames in the sequence
  const images = [];
  const imageSeq = { frame: 0 };

  // Preload images
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  // GSAP ScrollTrigger for image sequence animation
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: 'frame', // Snap to the closest integer frame
    ease: 'none',
    scrollTrigger: {
      trigger: '#home',
      scrub: 1.8, // Adjust for smoothness
      pin: true, // Keep canvas pinned during scroll
      start: 'top top',
      end: `+=${window.innerHeight * 2}`, // Adjust based on desired scroll length
    },
    onUpdate: render,
  });

  // Render the first frame initially
  images[0].onload = render;

  // Render the image on the canvas
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  // Helper function to scale image to fill canvas
  function scaleImage(img, ctx) {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio); // Ensures the image covers the entire canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      // Center the image in the viewport
      (canvas.width - img.width * ratio) / 2,
      (canvas.height - img.height * ratio) / 2,
      img.width * ratio,
      img.height * ratio
    );
  }
}

// Run the animation function
sequence_animation();
















const boxsliderImages9 = document.querySelector('.boxslider-images9');
const indicators9 = document.querySelectorAll('.indicator9');
const prevButton9 = document.querySelector('.prev9');
const nextButton9 = document.querySelector('.next9');
const boxslides9 = document.querySelectorAll('.boxslider-slide9');

let currentIndex9 = 0;
const totalSlides9 = boxslides9.length;

function showSlide9(index) {
  // Set the transform to shift the images and show the correct slide
  boxsliderImages9.style.transform = `translateX(-${index * 64}%)`; // Full width slides
  
  // Add 'active' class and change opacity for focused/unfocused slides
  boxslides9.forEach((slide9, i) => {
    slide9.classList.toggle('active9', i === index);
    slide9.style.opacity = i === index ? '1' : '0.5'; // Focused slide is fully visible
  });

  // Update indicator state
  indicators9.forEach((indicator9, i) => {
    indicator9.classList.toggle('active9', i === index);
  });
}

// Go to the next slide
function nextSlide9() {
  currentIndex9 = (currentIndex9 + 1) % totalSlides9; // Loop back to the first slide if on the last one
  showSlide9(currentIndex9);
}

// Go to the previous slide
function prevSlide9() {
  currentIndex9 = (currentIndex9 - 1 + totalSlides9) % totalSlides9; // Loop to the last slide if on the first one
  showSlide9(currentIndex9);
}

// Automatically change slide every 3 seconds
setInterval(nextSlide9, 3000);

// Handle indicator clicks
indicators9.forEach((indicator9, index) => {
  indicator9.addEventListener('click', () => {
    currentIndex9 = index;
    showSlide9(currentIndex9);
  });
});

// Event listeners for next/prev buttons
nextButton9.addEventListener('click', nextSlide9);
prevButton9.addEventListener('click', prevSlide9);

// Initialize the first slide
showSlide9(currentIndex9);






// download button js code 
function downloadPDF() {
  // Replace 'your-file-id' with the actual Google Drive file ID
  const fileID = 'your-file-id';
  const downloadLink = `https://drive.google.com/drive/folders/1PzS5pftZsyttDYD_4KWLjw9o8UbsR32W`;
  window.open(downloadLink, '_blank');
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxDfxJAYl5ch5I2fiO8wZqgJeT2c2gESoE8EH86Nuhpv--qmBKW2s-XZDeeCIT-mYDI/exec'; // Replace with your Google Apps Script URL
const openFormBtn = document.getElementById('openFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const closeSuccessBtn = document.getElementById('closeSuccessBtn');
const popupOverlay = document.getElementById('popupOverlay');
const successOverlay = document.getElementById('successOverlay');
const popupForm = document.getElementById('popupForm');
const spinner = document.getElementById('spinner');

// Open Popup Form
openFormBtn.addEventListener('click', () => {
  console.log("Open form button clicked.");
  popupOverlay.style.display = 'flex';
  console.log("Popup form displayed.");
});

// Close Popup Form
closeFormBtn.addEventListener('click', () => {
  console.log("Close form button clicked.");
  popupOverlay.style.display = 'none';
  console.log("Popup form hidden.");
});

// Close Success Popup and Redirect to Google Drive PDF
closeSuccessBtn.addEventListener('click', () => {
  console.log("Close success button clicked.");
  const pdfLink = "https://drive.google.com/file/d/1rl20ey6XhVYILN-8-hOdpfBb6xIdts4_/view?usp=sharing"; // Replace with your actual Google Drive PDF link
  console.log("Redirecting to PDF link:", pdfLink);
  window.location.href = pdfLink; // Redirect user to the PDF download page
});

// Form Submission
popupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
  console.log("Form submitted.");

  // Prepare Form Data
  const name = popupForm.querySelector('input[name="name"]').value;
  const email = popupForm.querySelector('input[name="email"]').value;
  const phone = popupForm.querySelector('input[name="phone"]').value;
  const query = popupForm.querySelector('textarea[name="query"]').value;
  const date = new Date().toLocaleDateString();
  console.log("Collected form data:", { name, email, phone, query, date });

  // Validate Name (should not be a single letter)
  if (name.length <= 1) {
    console.log("Validation failed: Name is too short.");
    alert('Name should have more than one letter.');
    return;
  }

  // Validate Mobile Number (should be 10 digits or start with +91 or 0)
  const phonePattern = /^(?:\+91|0)?\d{10}$/;
  if (!phonePattern.test(phone)) {
    console.log("Validation failed: Invalid mobile number.");
    alert('Please enter a valid mobile number (10 digits, or starting with +91 or 0).');
    return;
  }

  // Validate Email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    console.log("Validation failed: Invalid email address.");
    alert('Please enter a valid email address.');
    return;
  }

  // Validate Query (should not be a single letter)
  if (query.length <= 1) {
    console.log("Validation failed: Query is too short.");
    alert('Query should have more than one letter.');
    return;
  }

  // Prepare Form Data
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('Date', date);
  formData.append('query', query);
  console.log("Form data prepared for submission.");

  // Show Spinner
  spinner.style.display = 'block';
  console.log("Spinner displayed. Submitting form data to script.");

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      console.log("Form data successfully submitted.", response);
      spinner.style.display = 'none'; // Hide spinner
      console.log("Spinner hidden.");
      popupOverlay.style.display = 'none'; // Close form popup
      console.log("Popup form hidden after submission.");
      successOverlay.style.display = 'flex'; // Show success message
      console.log("Success overlay displayed.");
      popupForm.reset(); // Reset form
      console.log("Form reset.");
    })
    .catch(error => {
      console.error("Error during form submission:", error.message);
      spinner.style.display = 'none'; // Hide spinner
      console.log("Spinner hidden after error.");
    });
});