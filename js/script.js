const toggle = document.getElementById('navbar-toggle');
const links = document.getElementById('navbar-links');

toggle.addEventListener('click', () => {
    links.classList.toggle('active');
});


/* Modal js*/
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

