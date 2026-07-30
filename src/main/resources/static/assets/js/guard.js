function requireAuth(requiredRole){

    const loggedIn =
    localStorage.getItem("loggedIn");

    const role =
    localStorage.getItem("role");

    if(!loggedIn){

        window.location.href =
        "../auth/login.html";

        return;
    }

    if(role !== requiredRole){

        window.location.href =
        "../auth/login.html";
    }
}