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
  const downloadLink = `https://drive.google.com/file/d/1rl20ey6XhVYILN-8-hOdpfBb6xIdts4_/view?usp=drive_link`;
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








// original code 


// const boxsliderImages9 = document.querySelector('.boxslider-images9');
// const indicators9 = document.querySelectorAll('.indicator9');
// const prevButton9 = document.querySelector('.prev9');
// const nextButton9 = document.querySelector('.next9');
// const boxslides9 = document.querySelectorAll('.boxslider-slide9');

// let currentIndex9 = 0;
// const totalSlides9 = boxslides9.length;

// function showSlide9(index) {
//   boxsliderImages9.style.transform = `translateX(-${index * 64}%)`; /* Adjusted to keep partial visibility of adjacent images */
  
//   boxslides9.forEach((slide9, i) => {
//     slide9.classList.toggle('active9', i === index);
//     slide9.style.opacity = i === index ? '1' : '0.5'; /* Set opacity for focused and unfocused images */
//   });

//   indicators9.forEach((indicator9, i) => {
//     indicator9.classList.toggle('active9', i === index);
//   });
// }

// function nextSlide9() {
//   currentIndex9 = (currentIndex9 + 1) % totalSlides9;
//   showSlide9(currentIndex9);
// }

// function prevSlide9() {
//   currentIndex9 = (currentIndex9 - 1 + totalSlides9) % totalSlides9;
//   showSlide9(currentIndex9);
// }

// // Automatically change slide every 3 seconds
// setInterval(nextSlide9, 3000);

// // Manual navigation via indicators
// indicators9.forEach((indicator9, index) => {
//   indicator9.addEventListener('click', () => {
//     currentIndex9 = index;
//     showSlide9(currentIndex9);
//   });
// });

// // Event listeners for next and previous buttons
// nextButton9.addEventListener('click', nextSlide9);
// prevButton9.addEventListener('click', prevSlide9);

// // Initialize first slide
// showSlide9(currentIndex9);



// 30/11 code

      const boxsliderImages9 = document.querySelector('.boxslider-images9');
      const indicators9 = document.querySelectorAll('.indicator9');
      const prevButton9 = document.querySelector('.prev9');
      const nextButton9 = document.querySelector('.next9');
      const boxslides9 = document.querySelectorAll('.boxslider-slide9');
      
      let currentIndex9 = 0;
      const totalSlides9 = boxslides9.length;
      
      function showSlide9(index) {
        boxsliderImages9.style.transform = `translateX(-${index * 64}%)`; /* Adjusted to keep partial visibility of adjacent images */
        
        boxslides9.forEach((slide9, i) => {
          slide9.classList.toggle('active9', i === index);
          slide9.style.opacity = i === index ? '1' : '0.5'; /* Set opacity for focused and unfocused images */
        });
      
        indicators9.forEach((indicator9, i) => {
          indicator9.classList.toggle('active9', i === index);
        });
      }
      
      function nextSlide9() {
        currentIndex9 = (currentIndex9 + 1) % totalSlides9;
        showSlide9(currentIndex9);
      }
      
      function prevSlide9() {
        currentIndex9 = (currentIndex9 - 1 + totalSlides9) % totalSlides9;
        showSlide9(currentIndex9);
      }
      
      // Automatically change slide every 3 seconds
      setInterval(nextSlide9, 3000);
      
      // Manual navigation via indicators
      indicators9.forEach((indicator9, index) => {
        indicator9.addEventListener('click', () => {
          currentIndex9 = index;
          showSlide9(currentIndex9);
        });
      });
      
      // Event listeners for next and previous buttons
      nextButton9.addEventListener('click', nextSlide9);
      prevButton9.addEventListener('click', prevSlide9);
      
      // Initialize first slide
      showSlide9(currentIndex9);
    
      // Event listeners for next and previous buttons
    document.querySelector('.next9').addEventListener('click', nextSlide9);
    document.querySelector('.prev9').addEventListener('click', prevSlide9);
