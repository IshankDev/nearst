let clicks =document.querySelectorAll('.option')
clicks[0].addEventListener('click',()=>{
    document.querySelector('.customer').classList.add('active')
    document.querySelector('.seller').classList.remove('active')
    clicks[0].classList.add('active')
    clicks[1].classList.remove('active')
})
clicks[1].addEventListener('click',()=>{
    document.querySelector('.seller').classList.add('active')
    document.querySelector('.customer').classList.remove('active')
    clicks[1].classList.add('active')
    clicks[0].classList.remove('active')
})
