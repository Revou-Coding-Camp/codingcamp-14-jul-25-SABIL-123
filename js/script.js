document.addEventListener('DOMContentLoaded', function() {

    const userName = prompt("Please enter your name:", "Guest");
    if (userName) {
        document.getElementById('user-name').textContent = userName;
    }

    const navLinks = {
        home: document.getElementById('nav-home'),
        profile: document.getElementById('nav-profile'),
        message: document.getElementById('nav-message')
    };

    const sections = {
        home: document.getElementById('home-section'),
        profile: document.getElementById('profile-section'),
        message: document.getElementById('message-us-section')
    };

    function showSection(sectionToShow) {
        Object.values(sections).forEach(section => {
            section.style.display = 'none';
        });
        sectionToShow.style.display = 'block';
    }

    navLinks.home.addEventListener('click', (event) => {
        event.preventDefault();
        showSection(sections.home);
    });

    navLinks.profile.addEventListener('click', (event) => {
        event.preventDefault();
        showSection(sections.profile);
    });
    
     navLinks.message.addEventListener('click', (event) => {
        event.preventDefault();
        showSection(sections.message);
        sections.message.scrollIntoView({ behavior: 'smooth' });
    });
    
    showSection(sections.home);

    const messageForm = document.getElementById('message-form');
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (fullName === "" || email === "" || phone === "" || message === "") {
            alert("All fields are required! Please fill out the entire form.");
            return;
        }

        document.getElementById('output-time').textContent = new Date().toLocaleString();
        document.getElementById('output-name').textContent = fullName;
        document.getElementById('output-email').textContent = email;
        document.getElementById('output-phone').textContent = phone;
        document.getElementById('output-message').textContent = message;

        messageForm.reset();
    });
});