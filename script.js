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
        // Generate a random light color
        const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 90%)`;
        document.getElementById('portfolio').style.backgroundColor = randomColor;
    });
});