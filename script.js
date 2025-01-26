// Ensure EmailJS is initialized
emailjs.init("NA3v0srfeL82xUfUU");

// Function to handle form submission and send email
function sendEmail(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Define the email parameters for EmailJS
    const emailParams = {
        name: name,
        email: email,
        message: message,
    };

    // Send the email using EmailJS
    emailjs
        .send("service_zpm8m5p", "template_ku1rrdf", emailParams)
        .then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
                document.getElementById("contact-form").reset(); // Reset the form
            },
            (error) => {
                console.error("FAILED...", error);
                alert("An error occurred while sending your message. Please try again.");
            }
        );
}
