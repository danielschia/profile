$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle functionality
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navbar .menu');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menu.classList.add('active');
            menuBtn.innerHTML = '<i class="fas fa-times"></i>';
            menuOpen = true;
        } else {
            menu.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuOpen = false;
        }
    });

    // Close menu when clicking menu items
    const menuItems = document.querySelectorAll('.menu li a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            menuOpen = false;
        });
    });
});