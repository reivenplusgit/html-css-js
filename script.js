// Change projects container color when hovering over any project card
const projectCards = document.querySelectorAll('.project-card');
const projectsContainer = document.querySelector('.projects-container');

// Array of pleasant light colors
const pleasantColors = [
    '#f8f9fa', '#e9f5ff', '#fff8e1', '#f0fff0', 
    '#fff0f5', '#f5f0ff', '#e6f9ff', '#f9f6e6',
    '#e8f4f8', '#f9e6ff', '#e6ffe6', '#fff6e6'
];

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Get a random color from our pleasant colors array
        const randomColor = pleasantColors[Math.floor(Math.random() * pleasantColors.length)];
        projectsContainer.style.backgroundColor = randomColor;
    });
    
    // Optional: Reset to default color when mouse leaves
    card.addEventListener('mouseleave', function() {
        projectsContainer.style.backgroundColor = '#f8f9fa';
    });
});

// Form submission alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Change portfolio background color when project title is clicked
const projectTitles = document.querySelectorAll('.project-title');

projectTitles.forEach(title => {
    title.addEventListener('click', function() {
        const randomColor = getRandomLightColor();
        document.getElementById('portfolio').style.backgroundColor = randomColor;
    });
});