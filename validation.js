document.addEventListener("DOMContentLoaded", () => {
	let form = document.querySelector("form");
	
	// Validate input on change
	form.addEventListener("input", () => {
		validateInput();
	});

	// Prevent default form submission on submit button click
	document.getElementById("form-id").addEventListener("submit",(event)=> {
		event.preventDefault();
	});
	
	 // Reset form on reset button click
	form.addEventListener("reset", () => {
		resetStyles();
	});
});

function validateInput() {

	let isValid = true;

	// Validation for firstName
	let firstName = document.getElementById("firstName");
	if (!firstName.value.trim().length) {
		document.getElementById("error-firstName").innerText = "First name can't be empty.";
		onError(firstName, "First name can't be empty.");
		isValid = false;
	} else if (!/^[a-zA-Z]+$/.test(firstName.value.trim())) {
		document.getElementById("error-firstName").innerText = "first name must contain only alphabets.";
		onError(firstName, "first name must contain only alphabets.");
		isValid = false;
	} else {
		onSuccess(firstName);
	}

	// Validation for lastName
	let lastName = document.getElementById("lastName");
	if (!lastName.value.trim().length) {
		document.getElementById("error-lastName").innerText = "Last name can't be empty.";
		onError(lastName, "Last name can't be empty.");
		isValid = false;
	} else if (!/^[a-zA-Z]+$/.test(lastName.value.trim())) {
		document.getElementById("error-lastName").innerText = "Last name must contain only alphabets.";
		onError(lastName, "Last name must contain only alphabets.");
		isValid = false;
	} else {
		onSuccess(lastName);
	}

	// Validation for userName
	let userName = document.getElementById("userName");
	if (!userName.value.trim().length) {
	document.getElementById("error-userName").innerText = "User name can't be empty.";
		onError(userName, "User name can't be empty.");
		isValid = false;
	} else {
		onSuccess(userName);
	}

	// Validation for password
	let password = document.getElementById("password");
	if (!password.value.trim().length) {
		document.getElementById("error-password").innerText = "Password can't be empty.";
		onError(password, "Password can't be empty.");
		isValid = false;
	} else if (password.value.trim().length < 8) {
		document.getElementById("error-password").innerText = "Password must be at least 8 characters long.";
		onError(password, "Password must be at least 8 characters long.");
		isValid = false;
	} else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}/.test(password.value.trim())) {
		document.getElementById("error-password").innerText = "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
		onError(password, "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
		isValid = false;
	} else {
		onSuccess(password);
	}

	// Validation for address
	let address = document.getElementById("address");
	if (!address.value.trim().length) {
		document.getElementById("error-address").innerText = "Address can't be empty.";
		onError(address, "Address can't be empty.");
		isValid = false;
	} else if (!/^[a-zA-Z0-9\s\.,#-]+$/.test(address.value.trim())) {
		document.getElementById("error-address").innerText = "Address will not contain any special character.";
		onError(address, "Address will not contain any special character.");
		isValid = false;
	} else {
		onSuccess(address);
	}

	// Validation for contact
	let contact = document.getElementById("contact");
	if (!contact.value.trim().length) {
		document.getElementById("error-contact").innerText = "Contact can't be empty.";
		onError(contact, "Contact can't be empty.");
		isValid = false;
	} else if (!/^\d{10}$/.test(contact.value.trim())) {
		document.getElementById("error-contact").innerText = "Contact must contain exactly 10 digits.";
		onError(contact, "Contact must contain exactly 10 digits.");
		isValid = false;
	} else {
		onSuccess(contact);
	}
	return isValid;
}

function onSuccess(input) {
	let parent=input.parentElement;
	let messageEle=parent.querySelector("span");
	messageEle.style.visibility="hidden";
	messageEle.innerText="";
	parent.classList.remove("error");
	parent.classList.add("success");
	input.style.borderColor = "green"; // Change border color to green
}

function onError(input,message) {
	let parent=input.parentElement;
	let messageEle=parent.querySelector("span");
	messageEle.style.visibility="visible";
	messageEle.innerText=message;
	parent.classList.add("error");
	parent.classList.remove("success");
	input.style.borderColor = "red"; // Change border color to red
}

function submitForm() {
	if (validateInput()) {
		document.getElementById("form-id").submit();
		location.submit();
	}
}

function resetStyles() {
	let inputs = document.querySelectorAll("input");
		inputs.forEach(input => {
			input.style.borderColor = ""; // Reset border color
			input.style.boxShadow = ""; // Reset box shadow
			let parent = input.parentElement;
			let messageEle = parent.querySelector("span");
			messageEle.innerText = ""; // Reset error message
			messageEle.style.visibility = "hidden";
			parent.classList.remove("error");
			parent.classList.remove("success");
		}
	);
}

function resetForm() {
	document.getElementById("form-id").reset();
	resetStyles();
}