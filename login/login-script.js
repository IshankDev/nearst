
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

const ValidateForm = (password,name)=> 
    {
        if(password!='' && name!=''){
            return("")
        } 
    return ("All Feilds Required");
}
document.querySelector('.button button').addEventListener('click',(e)=>{
    e.preventDefault();
    data = {
        "username":document.querySelector('#nameinp').value,
        "password":document.querySelector('#passwordinp').value
    }
     let ans = ValidateForm(data.password,data.username)
    if(ans == ""){
        loginFn(data)
    }
    else{
        console.log("invalid");
    }
})
const loginFn = (data)=>{
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
            let respData = JSON.parse(this.responseText)
            console.log(respData);
            if(respData.err){
                console.log(respData.err);
                // errBox(respData.err);
            }
            else{
                console.log(this.responseText)
                localStorage.setItem('nearstuser',JSON.stringify(respData.user));
                localStorage.setItem('nearstToken',JSON.stringify(respData.token));
                window.location.href = './dashboard.html'
                // errBox("");
            }

        }
    });
    xhr.open("POST", "https://nearst-backend.herokuapp.com/api/login/");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = false;
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    console.log(JSON.stringify(data))
    xhr.send(JSON.stringify(data));
}