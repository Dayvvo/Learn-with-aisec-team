const linkDiv = document.createElement('div');

const links = document.querySelector('.linksDiv')

const linkDivs = document.createElement('div')

const cta = document.querySelector('.cta')

const hamburger = document.querySelector('.hamburgerMenu')

const closeNav = document.querySelector('.closeNav')

const header = document.querySelector('header')


if(window.innerWidth <= 640){
  linkDiv.appendChild(links);
  linkDiv.appendChild(cta);
  linkDivs.appendChild(linkDiv);
  linkDiv.classList.add('show')
  header.innerHTML += linkDivs.innerHTML;
}else if(window.innerWidth >= 640){
    linkDivs.innerHTML = "";

}


hamburger.addEventListener('click', () => {
    console.log('omooo');
    linkDiv.style.display = 'flex';
})
// closeNav.addEventListener('click', () => {
//     console.log('closed')
//     linkDivs.style.transform = 'translateX(0%)'
// })