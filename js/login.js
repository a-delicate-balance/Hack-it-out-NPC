const popbtn = document.querySelector(".login_button");
const hidebtn = document.querySelector(".close-symbol");
const openSignupPage = document.querySelector(".popupLoginForm .formContainer .formContent #login");

popbtn.addEventListener("click" , () => {
    document.body.classList.toggle("showpop");
});

hidebtn.addEventListener("click" , () => popbtn.click());

openSignupPage.forEach(link => {
    link.addEventListener("click" , (e) => {
        e.preventDefault();
        console.log(link.id)
    })
})