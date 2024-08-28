document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.info-details');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve the values from the form
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (fullName === "" || email === "") {
            alert("Please fill out the required fields."); // Validation alert
            return;
        }

        // Combine the form data into a message
        const formDataMessage = 
            `Full Name: ${fullName}\n` +
            `Email: ${email}\n` +
            `Subject: ${subject}\n` +
            `Message: ${message}\n\n` +
            "Do you want to submit this information?";

        // Display the form data with a confirmation prompt
        if (confirm(formDataMessage)) {
            // User clicked "OK"
            alert("Thank you! Your message has been sent.");

            // Optionally, reset the form after submission
            contactForm.reset();
        } else {
            // User clicked "Cancel"
            alert("Submission canceled.");
        }
    });
});

// Get the navigation links
// Get the navigation links
const homeLink = document.querySelector('a[href="pages/home_page.html"]');
const skillsLink = document.querySelector('a[href="pages/skills_page.html"]');
const educationLink = document.querySelector('a[href="pages/education.html"]');
const projectsLink = document.querySelector('a[href="pages/porjects.html"]');
const recommendationsLink = document.querySelector('a[href="pages/recommendations.html"]');
const contactsLink = document.querySelector('a[href="pages/contacts.html"]');

document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.querySelector('#add-skill-btn'); // or you can use .add-skill-1
  if (addButton) {
      addButton.addEventListener('click', function() {
          
      });
  } else {
      console.error('Button with ID "add-skill-btn" not found.');
  }
});




// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Get the modal element
  const modal = document.querySelector('.model-1');
  
  // Get the add skill button
  const addSkillBtn = document.getElementById('add-skill-btn');
  
  // Get the cancel button
  const cancelBtn = document.querySelector('.cancel-1');
  
  // Add event listener to the add skill button
  addSkillBtn.addEventListener('click', () => {
    // Show the modal by adding the 'show' class
    modal.classList.add('show');
  });
  
  // Add event listener to the cancel button
  cancelBtn.addEventListener('click', () => {
    // Hide the modal by removing the 'show' class
    modal.classList.remove('show');
  });
});

function addSkill() {
  const skillInput = document.querySelector('.skill-input').value;
  const proficiencyInput = document.querySelector('.proficiency-input').value;

  if (skillInput.trim() === '' || proficiencyInput.trim() === '') {
      alert('Please enter both a skill and proficiency');
      return;
  }

  const skillDiv = document.createElement('div');
  skillDiv.classList.add('input-group');

  const skillRect = document.createElement('div');
  skillRect.classList.add('rectangle-76');
  skillRect.textContent = skillInput;

  const proficiencyRect = document.createElement('div');
  proficiencyRect.classList.add('rectangle-77');
  proficiencyRect.textContent = proficiencyInput + '%';

  skillDiv.appendChild(skillRect);
  skillDiv.appendChild(proficiencyRect);

  document.getElementById('saved-skills').appendChild(skillDiv);

  // Clear input fields after adding
  document.querySelector('.skill-input').value = '';
  document.querySelector('.proficiency-input').value = '';
}

document.addEventListener('DOMContentLoaded', function() {
  const addSkillBtn = document.getElementById('add-skill-btn');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.querySelector('.cancel-1');

  addSkillBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    document.body.classList.add('modal-active');
  });

  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-active');
  });

  // Close the modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-active');
    }
  });
});

