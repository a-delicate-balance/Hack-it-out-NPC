const popbtn = document.querySelector(".login_button");
const hidebtn = document.querySelector(".close-symbol");

const formPopUP = document.querySelector(".popupLoginForm");
const openSignupPage = document.querySelectorAll(".formContainer .signupLink a");

popbtn.addEventListener("click" , () => {
    document.body.classList.toggle("showpop");
});

hidebtn.addEventListener("click" , () => popbtn.click());

openSignupPage.forEach(link => {
    link.addEventListener("click" , (e) => {
        e.preventDefault();
        formPopUP.classList[link.id === "signup-link" ? "add" : "remove" ]("show-signup");
    });
});