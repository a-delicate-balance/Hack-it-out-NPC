let searchBtn = document.querySelector("#searchBtn");
let searchBar = document.querySelector(".searchBarBox");

searchBtn.addEventListener("click" , () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});