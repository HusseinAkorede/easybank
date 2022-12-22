const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobileNav')
let toggleMenu = false

if (!toggleMenu) {
    hamburger.src ='images/icon-hamburger.svg'
} else {
    hamburger.src ='images/icon-close.svg'
}
hamburger.addEventListener('click', () => {
    if (!toggleMenu) {
        toggleMenu = true
        hamburger.src ='images/icon-close.svg'
    } else {
        toggleMenu = false
        hamburger.src ='images/icon-hamburger.svg'
    }
    mobileNav.classList.toggle('active')
})
