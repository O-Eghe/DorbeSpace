document.addEventListener("DOMContentLoaded", function() {

  

  // document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const images = document.querySelectorAll(".image");
    let currentIndex = 0;

    // Show initial image
    images[currentIndex].classList.add("active");

    // Event listeners for buttons
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);

    // Function to show previous image
    function showPrevImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add("active");
    }

    // Function to show next image
    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }
});


/*-----------------------------------Contact-------------------------------*/

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  
  // Basic form validation
  if (name && email && phone && message) {
      // Send the email
      emailjs.send("service_dnc28ip", "template_9a5evfi", {
          from_name: name,
          from_email: email,
          phone_number: phone,
          message: message
      })
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          document.getElementById('successMessage').classList.remove('hidden');
          document.getElementById('contactForm').reset();
      }, function(error) {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again later.');
      });
  } else {
      alert('Please fill out all fields.');
  }
  
});

