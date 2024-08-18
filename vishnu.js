// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav ul li a');

// window.onscroll = () => {
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop0-150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top > offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav ul li a[href*=' + id + ' ]').classList.add(active)
//             })
//         }
    
//     })
// }

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x')
//     navbar.classList.toggle('active')
// }

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Fixed typo here
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top > offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove 'active' class from all links
            });
            document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active'); // Add 'active' class to the current link
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

emailjs.init("6ZX9a-nAS8Zjd6MEg"); // Replace with your actual Public API Key

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const formData = {
                name: this.name.value,
                email: this.email.value,
                number: this.number.value,
                subject: this.subject.value,
                message: this.message.value
            };

            emailjs.send('service_ro06le7', 'template_8zlr6sk', formData)
            .then(response => {
                const statusElement = document.getElementById('formStatus');
                statusElement.textContent = "Message sent successfully!";
                statusElement.style.display = 'flex'; // Make sure the status message is visible
                statusElement.style.color = 'green';
                 // Reset the form
                document.getElementById('contactForm').reset();

                // Hide the status message after 3 seconds (3000 milliseconds)
                setTimeout(() => {
                    statusElement.style.display = 'none';
                    }, 3000);
            })

            .catch(error => {
                const statusElement = document.getElementById('formStatus');
                statusElement.textContent =  "Failed to send message. Please try again later.";
                statusElement.style.display = 'flex';
                statusElement.style.color = 'red';
                setTimeout(() => {
                    statusElement.style.display = 'none';
                    }, 3000);
            });
            });
    