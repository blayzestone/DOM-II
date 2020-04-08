// Your code goes here
const getElement = (selector) => document.querySelector(selector);

const title = getElement(".logo-heading");
const heroImage = getElement(".home .intro img");
const body = getElement("body");
const buttons = document.querySelectorAll("div.btn");
const image = getElement(".img-content img");
const paragraphs = document.querySelectorAll("p");
const nav = getElement(".main-navigation");

buttons[0].addEventListener("click", () => body.style.backgroundColor = "Bisque"); // 1
buttons[1].addEventListener("click", () => body.style.backgroundColor = "CadetBlue");
buttons[2].addEventListener("click", () => body.style.backgroundColor = "DarkOliveGreen");;


rotateOnScroll();

window.addEventListener('copy', () => body.style.backgroundColor = 'lightblue') // 10

window.addEventListener('scroll', () => nav.style.backgroundColor = "gray"); // 9

title.addEventListener('mouseover', () => title.style.transform = "rotate(0deg)"); // 2
title.addEventListener('mouseleave', () => title.style.color = 'green') // 7

window.addEventListener('resize', () => body.style.border = "solid 3px blue"); // 8

window.addEventListener("load", () => { // 3
  return gsap.from(heroImage, {opacity: 0, duration: 1, y: 50})
});

window.addEventListener("load", () => {
  const navLinks = document.querySelectorAll(".nav .nav-link"); 
  return navLinks.forEach(link => link.addEventListener('click', e => e.preventDefault()));
});

function rotateOnScroll() {
  let rotation = 0;

  window.addEventListener("wheel", () => { // 4
    rotation += 1;
    return title.style.transform = `rotate(${rotation}deg)`;
  });
}

window.addEventListener("keydown", e => title.textContent = e.key) // 5

// Stop Propagation
body.addEventListener('dblclick', () => body.style.color = "navy"); // 6

image.addEventListener('dblclick', e => {
  e.stopPropagation();
  image.style.opacity = '0';
  gsap.from(image, {opacity: 1, duration: .5});
}); // 6