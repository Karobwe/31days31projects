const showPassword = document.querySelector("#show-password");
const password = document.querySelector("#password");

showPassword.addEventListener("click", function(e) {
    e.preventDefault();
    toggleState(showPassword);
});

const toggleState = (element) => {
    let state = element.getAttribute("data-show");

    if (state === "true") {
        element.setAttribute("data-show", false);
        password.setAttribute("type", "password");
    } else {
        element.setAttribute("data-show", true);
        password.setAttribute("type", "text");
    }
};