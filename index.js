const hamburger = document.querySelector('#header .hamburger');
const mobile_menu  = document.querySelector('#header .nav-list ul');
const header = document.querySelector('.header.container');
const links  = document.querySelectorAll('#header .nav-list ul a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', ()=>{
    let scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = 'transparent';
    }
})

links.forEach(element => {
    element.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});
