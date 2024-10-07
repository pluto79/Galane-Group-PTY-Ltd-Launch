const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_q83bhou';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Your message is sent, and we’ll get back to you as soon as possible.');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});