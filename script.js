document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Page reload hone se roke
    
    // Input fields ke values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let message = document.getElementById("message").value.trim();

    // Email aur mobile ke liye validation patterns
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let mobilePattern = /^[0-9]{10,13}$/;

    // Validation
    if (name === "") {
      alert("Please enter your name.");
      return;
    }
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!mobilePattern.test(mobile)) {
      alert("Please enter a valid mobile number (10-13 digits).");
      return;
    }
    if (message === "") {
      alert("Please write your message.");
      return;
    }

   





    alert("Form submitted successfully! I will get back to you soon.");
    document.getElementById("contactForm").reset(); // Form reset kare
  });


 
  document.querySelector('.subscribe-btn').addEventListener('click', function(e) {
    const input = document.querySelector('.newsletter-input');
    if (input.value.trim() === "") {
      e.preventDefault();
      alert("Please enter a valid email!");
    }
  });





  
  const socialIcons = document.querySelectorAll('.social-icon i');

  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      console.log('Icon hovered');
    });
  });



  // JavaScript to add an alert when a project card is clicked
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      alert('Project clicked!');
    });
  });



