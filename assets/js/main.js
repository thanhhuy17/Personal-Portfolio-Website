/**====================== SHOW MENU ========================= */
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/**======= MENU SHOW ========= */
if(navToggle){
    navToggle.addEventListener('click', ()=>{ 
        // console.log(navToggle);      
        navMenu.classList.add('show-menu')        
    })
}
/**======= MENU HIDDEN ========= */
if(navClose){
    navClose.addEventListener('click', ()=>{        
        navMenu.classList.remove('show-menu')
    })
}
/**======= CHANGE BACKGROUND HEADER ========= */
const bgHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header');             
}
window.addEventListener('scroll', bgHeader);  

/**======= DARK LIGHT THEME ========= */
const themeButon = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurentIcon = ()=> document.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButon.classList[selectedTheme === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Active / Deactive Theme Moon/Sun
themeButon.addEventListener('click', ()=>{
    // Add or remove dark icon theme
    document.body.classList.toggle(darkTheme)
    themeButon.classList.toggle(iconTheme)
    //
    localStorage.setItem('selected-theme', getCurentTheme())
    localStorage.setItem('selected-ticon', getCurentIcon())


})
