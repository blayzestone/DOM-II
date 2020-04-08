// Your code goes here
const getElement = (selector) => document.querySelector(selector);

const title = getElement('.logo-heading');
const heroImage = getElement('.home .intro img');
const body = getElement('body');
const buttons = document.querySelectorAll('div.btn');
const image = getElement('.img-content img');
const paragraphs = document.querySelectorAll('p');
const nav = getElement('.main-navigation');

// set the navigation to render above everything else
window.addEventListener('load', () => nav.style.zIndex = '1');

rotateOnScroll();

function rotateOnScroll() {
  let rotation = 0;

  window.addEventListener('wheel', () => {
    rotation += 1;
    return title.style.transform = `rotate(${rotation}deg)`;
  });
}

window.addEventListener('copy', () => body.style.backgroundColor = 'lightblue'); // copy text event
window.addEventListener('scroll', () => nav.style.backgroundColor = 'gray'); // scroll event

title.addEventListener('mouseover', () => title.style.transform = 'rotate(0deg)');
title.addEventListener('mouseleave', () => title.style.color = 'green');

window.addEventListener('resize', () => body.style.border = 'solid 3px blue');

// Slide in animation for the hero image
window.addEventListener('load', () => gsap.from(heroImage, {opacity: 0, duration: 1, y: 50}));

// prevent default event for the navigation links
window.addEventListener('load', () => {
  const navLinks = document.querySelectorAll('.nav .nav-link'); 
  return navLinks.forEach(link => link.addEventListener('click', e => e.preventDefault()));
});

window.addEventListener('keydown', e => title.textContent = e.key);

body.addEventListener('dblclick', () => body.style.color = 'navy');

image.addEventListener('dblclick', e => {
  e.stopPropagation(); // Stop Propagation for the above body double click event

  // fade out animation
  image.style.opacity = '0';
  gsap.from(image, {opacity: 1, duration: .5});
});

// Sign up buttons
buttons[0].addEventListener('click', () => body.style.backgroundColor = 'Bisque');
buttons[1].addEventListener('click', () => body.style.backgroundColor = 'CadetBlue');
buttons[2].addEventListener('click', () => body.style.backgroundColor = 'DarkOliveGreen');