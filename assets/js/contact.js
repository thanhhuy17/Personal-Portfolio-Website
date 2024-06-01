// ===================== EMAIL JS ==========================
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.prevenDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_cv0ad2n','template_698dyv9','#contact-form','lcsm-Y0vlna16UkZ8')
        .then(()=>{
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(()=>{
                contactMessage.textContent = ''
            }, 5000)
        })    
}

contactForm.addEventListener('submit', sendEmail)