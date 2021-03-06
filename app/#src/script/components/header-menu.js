document.querySelector('.nav__burger').addEventListener('click', function () {
    this.classList.toggle('nav__burger_active');
    document.querySelector('.nav__sidebar-wrapper').classList.toggle('nav__sidebar-wrapper_active');
    document.querySelector('.nav').classList.toggle('nav_active');
    document.querySelector('body').classList.toggle('inactive');
    
});



let navbar = document.querySelector('.header');
let navbarActive = false;
let speed = 300;
window.addEventListener('scroll', function(e) {
    
    let topSectionHeight = document.querySelector('.discover').offsetHeight;
    if (window.scrollY > topSectionHeight - navbar.offsetHeight && !navbarActive) {
        navbarActive = true;
        navbar.classList.add('header_active');
        navbar.style.opacity = 0;
        navbar.style.position = 'fixed';
        navbar.animate([
            {opacity: '0'},
            {opacity: '1'},
        ],
            {
            duration: speed
        })
        navbar.style.opacity = 1;

        
        console.log('dd');
    }
    if(window.scrollY < topSectionHeight - navbar.offsetHeight - 100 && navbarActive){
        navbarActive = false;
        navbar.style.opacity = 1;
        
        navbar.animate([
            {opacity: '1'},
            {opacity: '0'},
        ],
            {
            duration: speed
        })
        setTimeout(() => {
            navbar.style.position = 'absolute';
            navbar.classList.remove('header_active');
        }, speed);
        
        
    }
    
})



