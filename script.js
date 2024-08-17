document.addEventListener('DOMContentLoaded', function() {
    // Função para verificar a posição das seções
    function revealOnScroll() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const revealPoint = 150;

            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add('active');
            }
        });
    }

    
    revealOnScroll();

    
    window.addEventListener('scroll', revealOnScroll);
});

/
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        let whatsappNumber = '+5511969449698'; 
        let encodedMessage = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`);
        let whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank'); 
        this.reset(); 
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});


