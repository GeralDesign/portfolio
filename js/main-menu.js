// NAV MENU TOP
window.addEventListener('scroll', event =>{
    let nav = document.querySelector('.top-menu');
  
    (window.scrollY >= 44) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
  });
  
 

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', ()=> {
  let current = '';
  sections.forEach( section =>{
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= sectionTop - sectionHeight / 7){
      current = section.getAttribute('id');
    }
  })
  navLi.forEach( li =>{
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
});


window.addEventListener('resize', () => {
    if (window.innerWidth <= 1230) {
        location.reload();
    }
});



// window.addEventListener('scroll', () => {
//     const nav = document.querySelector('.top-menu');
//     const scrollPoint = 50; // how far you scroll before changing color

//     if (window.scrollY > scrollPoint) {
//         nav.classList.add('scroll');
//     } else {
//         nav.classList.remove('scroll');
//     }
// });

// document.querySelectorAll('nav ul li').forEach(li => {
//     li.classList.remove('active');
// });
