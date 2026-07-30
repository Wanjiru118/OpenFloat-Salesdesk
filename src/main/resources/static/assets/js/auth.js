function login() {

    const email =
    document.getElementById("email").value;

    const loginBtn =
    document.getElementById("loginBtn");

    loginBtn.innerText =
    "Logging in...";

    loginBtn.disabled = true;

    setTimeout(() => {

        if(email === "admin@example.com") {

            localStorage.setItem(
                "role",
                "admin"
            );

            localStorage.setItem(
                "loggedIn",
                "true"
            );

            window.location.href =
            "../admin/dashboard.html";

        }
        else if(email === "cashier@example.com") {

            localStorage.setItem(
                "role",
                "cashier"
            );

            localStorage.setItem(
                "loggedIn",
                "true"
            );

            window.location.href =
            "../cashier/dashboard.html";

        }
        else {

            showToast(
                "Invalid Login"
            );

            loginBtn.innerText =
            "Login";

            loginBtn.disabled =
            false;
        }

    }, 1500);
}