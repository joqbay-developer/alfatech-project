

const LINKS__MENU = document.querySelectorAll('a[href^="#"]');

LINKS__MENU.forEach((link) => {
  console.log(link);
  link.addEventListener('click', (event) => {
    event.preventDefault();
    let element = event.target;
    let id = element.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  })
})





