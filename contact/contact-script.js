
const scroll = ()=>{
    loged=localStorage.getItem("nearstToken")
    console.log(loged)
    if(loged){
        document.querySelector('#log').innerHTML='Dashboard'
        document.querySelector('#log').href='../dashboard/index.html'
    }
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
document.getElementById('submit').onclick= (e)=>{
    e.preventDefault()
    let name = document.getElementById('name').value
    let number = document.getElementById('number').value
    let mail = document.getElementById('mail').value
    let message = document.getElementById('message').value
    if(name!="" && number!="" && mail!="" && message!=""){
        emailjs.send("service_gy23nvu","template_lox3cuj",{
            from_name: name,
            from_email: mail,
            from_number: number,
            message: message,
            })
            .then(function(){
                document.getElementById('popup').innerHTML = "We have recieved your Inquiry. We will reach out to you as soon as possible."
                document.getElementById('popup').classList.remove('error')
                document.getElementById('popup').classList.remove('success')
                setTimeout(()=>{document.getElementById('popup').classList.add('success')}, 10)
            }),
            function(error){
                document.getElementById('popup').innerHTML = "There was an error while submitting the form. Please try again."
                document.getElementById('popup').classList.remove('success')
                document.getElementById('popup').classList.remove('error')
                setTimeout(()=>{document.getElementById('popup').classList.add('error')}, 10)
                
            }
    
    }
    else{
        document.getElementById('popup').innerHTML = "All fields are required."
        document.getElementById('popup').classList.remove('success')
        document.getElementById('popup').classList.remove('error')
        setTimeout(()=>{document.getElementById('popup').classList.add('error')}, 10)
        
    }

}