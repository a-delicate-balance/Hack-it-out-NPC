let searchBtn = document.querySelector("#searchBtn");
let searchBar = document.querySelector(".searchBarBox");

let menuBtn = document.querySelector("#menuBar");
let navBar = document.querySelector(".navBar");

window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("active");
}

searchBtn.addEventListener("click" , () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});

menuBtn.addEventListener("click",  () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },

    },
});