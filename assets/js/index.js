let button = document.querySelector(".button");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let age = document.querySelector("#age");
let pattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
let valid = pattern.test(email.value);
let clearMessageEmpty = document.querySelectorAll(".form__label-empty");
let clearMessageError = document.querySelectorAll(".form__label-error");

button.addEventListener("click", function checkAccess() {
	let correctInput = 0;
	document.querySelector(".welcome-input").innerHTML = "";
	for (let i = 0; i <= clearMessageEmpty.length - 1; i++) {
		clearMessageEmpty[i].classList.remove("active");
	}

	for (let i = 0; i <= clearMessageError.length - 1; i++) {
		clearMessageError[i].classList.add("inactive");
	}

	if (email.value == "") {
		document.querySelector("#emailEmpty").classList.remove("inactive");
		document.querySelector("#emailEmpty").classList.add("active");
	} else if (pattern.test(email.value) == false && email.value != "") {
		document.querySelector("#emailError").classList.remove("inactive");
		document.querySelector("#emailError").classList.add("active");
	} else correctInput++;

	if (password.value == "") {
		document.querySelector("#passwordEmpty").classList.remove("inactive");
		document.querySelector("#passwordEmpty").classList.add("active");
	} else correctInput++;

	if (firstName.value == "") {
		document.querySelector("#firstNameEmpty").classList.remove("inactive");
		document.querySelector("#firstNameEmpty").classList.add("active");
	} else correctInput++;

	if (lastName.value == "") {
		document.querySelector("#lastNameEmpty").classList.remove("inactive");
		document.querySelector("#lastNameEmpty").classList.add("active");
	} else correctInput++;

	if (age.value == "") {
		document.querySelector("#ageEmpty").classList.remove("inactive");
		document.querySelector("#ageEmpty").classList.add("active");
	} else if (isNaN(age.value) && age.value != "") {
		document.querySelector("#ageError").classList.remove("inactive");
		document.querySelector("#ageError").classList.add("active");
	} else correctInput++;

	if (correctInput == document.querySelectorAll(".form__label").length) {
		document.querySelector(".welcome-input").innerHTML = `Добро пожаловать, ${firstName.value}!`;
	}
});
