//Top selection
function showSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('section');

    // Loop through sections and hide them
    sections.forEach(section => {
        section.style.display = 'none';

        // If switching away from "Projects," reset all dropdowns
        if (section.id === 'projects') {
            const dropdowns = section.querySelectorAll('.project-content, .sub-project-content');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
                dropdown.style.maxHeight = null; // Reset height
            });
        }
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  // Optional: Close when user clicks outside the modal content
  window.onclick = function(event) {
    // Check if the user clicked on the dark overlay
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
      if (event.target === modals[i]) {
        modals[i].style.display = "none";
      }
    }
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    const cloud = document.getElementById("skillCloud");
    const bubbles = document.querySelectorAll(".skill-bubble");
  
    // Container dimensions
    const cloudWidth = cloud.offsetWidth;
    const cloudHeight = cloud.offsetHeight;
  
    bubbles.forEach(bubble => {
      // Random x,y so each bubble is scattered inside the container
      const x = Math.floor(Math.random() * (cloudWidth - 80));
      const y = Math.floor(Math.random() * (cloudHeight - 40));
      
      // Keep rotation the same (0 degrees), i.e. no random rotation
      bubble.style.left = x + "px";
      bubble.style.top = y + "px";
      bubble.style.transform = "rotate(0deg)";
    });
  });

//Project
function toggleDropdown(sectionId) {
    const content = document.getElementById(sectionId);

    if (!content) {
        console.error(`Section with ID "${sectionId}" not found.`);
        return;
    }

    // Check if this is a parent dropdown
    const isParentDropdown = content.classList.contains('project-content');

    if (isParentDropdown) {
        // Close all other parent dropdowns
        const allParentDropdowns = document.querySelectorAll('.project-content');
        allParentDropdowns.forEach(dropdown => {
            if (dropdown !== content) {
                dropdown.classList.remove('show');
                dropdown.style.maxHeight = null;

                // Close nested dropdowns inside other parents
                const nestedDropdowns = dropdown.querySelectorAll('.sub-project-content');
                nestedDropdowns.forEach(nested => {
                    nested.classList.remove('show');
                    nested.style.maxHeight = null;
                });
            }
        });

        // Toggle the current parent dropdown
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            content.style.maxHeight = null;
        } else {
            content.classList.add('show');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    } else {
        // For nested dropdowns, toggle only the selected dropdown
        if (content.classList.contains('show')) {
            content.classList.remove('show');
            content.style.maxHeight = null;
        } else {
            content.classList.add('show');
            content.style.maxHeight = content.scrollHeight + "px";

            // Adjust the parent's height dynamically to fit the expanded nested dropdown
            const parent = content.closest('.project-content');
            if (parent && parent.classList.contains('show')) {
                parent.style.maxHeight = 900 + "px";
            }
        }
    }
}



// Add in your script.js
window.addEventListener('scroll', () => {

    const header = document.getElementById('main-header');
    //const aboutSection = document.getElementById('about');
    //const aboutBottom = aboutSection.getBoundingClientRect().bottom;

    if (window.scrollY > 50) {
        // Add solid background after scrolling past "About"
        header.classList.add('scrolled');
    } else {
        // Make header transparent when at the top
        header.classList.remove('scrolled');
    }

    const button = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});

document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
