
const scroll = ()=>{
    const nav = document.querySelector('nav')
    if(window.scrollY > 50){
        nav.classList.add('scroll')
    }
    else{
        nav.classList.remove('scroll')
    }
}
const mobNavToggler = ()=>{
    const navLinks = document.querySelectorAll('nav ul li')
    document.querySelector('nav').classList.toggle('nv-active');
    document.querySelector('.modal').classList.toggle('modal-active');
    document.querySelector('.hamburger').classList.toggle('ham-active');
    navLinks.forEach((link,index)=>{
        if(link.style.animation.includes('slideLink')){
            link.style.animation =''
        }
        else{
            link.style.animation = `slideLink 0.5s ease forwards ${index/7 + 0.5}s`
        }
    });
  }
  const navbar = ()=>{
    document.querySelector('.hamburger').addEventListener('click',()=>{
        mobNavToggler();
  });
    document.querySelector('.modal').addEventListener('click',()=>{
        mobNavToggler();
  });
  };
  navbar();
window.onload = scroll
window.onscroll = scroll