const button = document.querySelector(".button");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const age = document.querySelector("#age");
const pattern = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const valid = pattern.test(email.value);
const inputs = document.querySelectorAll(".form__input");
const checkboxes = document.querySelectorAll(".form__chekbox");
const clearMessageEmpty = document.querySelectorAll(".form__label-empty");
const clearMessageError = document.querySelectorAll(".form__label-error");
const userDataField = document.querySelector(".user-info");
const user = [];
let userTime = setTimeout(remind, 7000);
let i = 0;

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
	} else {
		user.push(email.value);
		correctInput++;
	}

	if (password.value == "") {
		document.querySelector("#passwordEmpty").classList.remove("inactive");
		document.querySelector("#passwordEmpty").classList.add("active");
	} else {
		user.push(password.value);
		correctInput++;
	}

	if (firstName.value == "") {
		document.querySelector("#firstNameEmpty").classList.remove("inactive");
		document.querySelector("#firstNameEmpty").classList.add("active");
	} else {
		user.push(firstName.value);
		correctInput++;
	}

	if (lastName.value == "") {
		document.querySelector("#lastNameEmpty").classList.remove("inactive");
		document.querySelector("#lastNameEmpty").classList.add("active");
	} else {
		user.push(lastName.value);
		correctInput++;
	}

	if (age.value == "") {
		document.querySelector("#ageEmpty").classList.remove("inactive");
		document.querySelector("#ageEmpty").classList.add("active");
	} else if (isNaN(age.value) && age.value != "") {
		document.querySelector("#ageError").classList.remove("inactive");
		document.querySelector("#ageError").classList.add("active");
	} else {
		user.push(age.value);
		correctInput++;
	}

	if (correctInput == document.querySelectorAll(".form__label").length) {
		document.querySelector(".welcome-input").innerHTML = `Добро пожаловать, ${firstName.value}!`;
		showData(user);
	}
});

// timer

inputs.forEach((input) => {
	input.addEventListener("keyup", updateActivity);
});

checkboxes.forEach((checkbox) => {
	checkbox.addEventListener("click", updateActivity);
});

function showData(user) {
	let timerId = setInterval(function () {
		let div = document.createElement("div");
		div.classList.add("user-info_element");
		let info = user[i++] || clearInterval(timerId);
		div.innerHTML = info;
		if (info !== undefined) userDataField.append(div);
	}, 3000);
}

function remind() {
	alert("Что-то долго думаете");
}

function updateActivity() {
	clearTimeout(userTime);
	userTime = setTimeout(remind, 7000);
}
