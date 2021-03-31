window.onscroll = () => {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
       document.querySelector(".header").classList.add("shrink-header");
    } else {
       document.querySelector(".header").classList.remove("shrink-header");
    }
}


const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.line');
const navMenu = document.querySelector('.nav-menu');
const navs = document.querySelectorAll('.nav');

const animate = () => {
    
    burger.classList.toggle('burger-rotate');
    navMenu.classList.toggle('nav-menu-position');

    lines.forEach(elements => {
        elements.classList.toggle('line-margin');
    })

    navs.forEach(nav => {
        nav.addEventListener('click',() => {
            navMenu.classList.remove('nav-menu-position');
            burger.classList.remove('burger-rotate');

            lines.forEach(elements => {
                elements.classList.remove('line-margin');
            })
        })
    })
}

burger.addEventListener('click', animate);

// CONTACT MODAL



const body = document.querySelector('body');
const modal = document.createElement('div');
modal.classList.add('modal-class');

const formTitle = document.createElement('h1');
formTitle.classList.add('form-title');
formTitle.innerText = 'Contact Us'

const form = document.createElement('form');
form.classList.add('form');
form.setAttribute('action', 'https://en.wikipedia.org/wiki/%22Hello,_World!%22_program');
form.setAttribute('method', 'post');

const closeBtn = document.createElement('h1');
closeBtn.innerText = 'X';
closeBtn.classList.add('close-btn')
form.appendChild(closeBtn);

closeBtn.addEventListener('click', ()=>{
    modal.classList.remove('modal-show');
})

const inputName = document.createElement('input');
inputName.setAttribute('type','text');
inputName.setAttribute('placeholder','Full Name');
inputName.required = true;

const inputEmail = document.createElement('input');
inputEmail.setAttribute('type','email');
inputEmail.setAttribute('placeholder','Email');
inputEmail.required = true;

const submit = document.createElement('input');
submit.setAttribute('type','submit');


const showModal = document.querySelector('.contact');
showModal.addEventListener('click', () => {
    modal.classList.add('modal-show')
})

form.appendChild(formTitle);
form.appendChild(inputName);
form.appendChild(inputEmail);
form.appendChild(submit);
modal.appendChild(form);

body.appendChild(modal);
