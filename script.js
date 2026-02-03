function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();

    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    if (!gender) {
        alert("Please select gender");
        return false;
    }

    if (dob === "") {
        alert("Please select date of birth");
        return false;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter valid 10 digit phone number");
        return false;
    }

    if (address === "") {
        alert("Please enter address");
        return false;
    }

    alert("Registration Successful ✅");
    return true;
}