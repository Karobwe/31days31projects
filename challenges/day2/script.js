const showPassword = document.querySelector("#show-password");

showPassword.addEventListener("click", function() {
    toggleState(showPassword);
});

const toggleState = (element) => {
    let state = element.getAttribute("data-show");

    if (state === "true") {
        element.setAttribute("data-show", false);
    } else {
        element.setAttribute("data-show", true);
    }
};