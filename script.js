const formValidation = () => {
    const emailInput = document.getElementById("email");
    const submitBtn = document.getElementById("submit-btn");
    const errorElements = document.querySelectorAll(".no-error");
    const errorStatment = document.getElementById("error-statement");
    const form = document.getElementById("form")

    const emailRegex =
    new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validateEmail();
    })

    const validateEmail = () => {
        
        let message;
        let emailAccess;

        if (emailRegex.test(emailInput.value.trim())){
            emailAccess = true;
            message = "";
            showHideError();
            return true;
        } else if (!emailRegex.test(emailInput.value.trim())){
            message = "Please enter a valid email";
            emailAccess = false;
            showHint();
            showHideError();
            return false;
        } else if (emailInput.value.trim() == ""){
            message = "Please enter your email";
            emailAccess = false;
            showHint();
            showHideError();
            return false;
        }

        function showHint() {
            errorStatment.innerText = message;
            emailInput.style.border = "2px solid var(--clr-error)";
            emailInput.style.opacity = "1";
        }

        function showHideError(){
            if(emailAccess){
                errorElements.forEach(error => {
                    error.classList.add("no-error")
                    console.log(error)
                });
            } else {
                errorElements.forEach(error => {
                    error.classList.remove("no-error")
                    console.log(error)
                });
            }
        }

    }
};

window.addEventListener('load', formValidation);