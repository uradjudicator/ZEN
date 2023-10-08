const burgerBtn = document.querySelector('.bars')
const mobileMenu = document.querySelector('.mobile-menu ')

burgerBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})