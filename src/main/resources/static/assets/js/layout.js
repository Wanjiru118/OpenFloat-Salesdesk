function createSidebar(role = "admin", active = "") {

    let menu = "";

    if(role === "admin") {

        menu = `
            <li>
                <a class="${active === 'dashboard' ? 'active' : ''}"
                   href="../admin/dashboard.html">
                   Dashboard
                </a>
            </li>

            <li>
                <a href="#">
                    Products
                </a>
            </li>

            <li>
                <a href="#">
                    Sales
                </a>
            </li>

            <li>
                <a href="#">
                    Customers
                </a>
            </li>

            <li>
                <a href="#">
                    Reports
                </a>
            </li>
        `;

    } else {

        menu = `
            <li>
                <a class="${active === 'dashboard' ? 'active' : ''}"
                   href="../cashier/dashboard.html">
                   Dashboard
                </a>
            </li>

            <li>
                <a href="#">
                    POS
                </a>
            </li>

            <li>
                <a href="#">
                    My Sales
                </a>
            </li>

            <li>
                <a href="#">
                    Customers
                </a>
            </li>
        `;
    }

    return `
        <div class="sidebar">

            <div class="logo">
                <h2>SalesDesk</h2>
            </div>

            <ul class="menu">
                ${menu}
            </ul>

            <div class="profile">

                <p>
                    Role:
                    ${role.toUpperCase()}
                </p>

                <button onclick="logout()">
                    Logout
                </button>

            </div>

        </div>
    `;
}

function createTopbar(title = "Dashboard") {

    return `
        <div class="topbar">

            <h3>${title}</h3>

            <span>
                POS System
            </span>

        </div>
    `;
}

function logout(){

    const confirmLogout =
    confirm(
        "Are you sure you want to logout?"
    );

    if(!confirmLogout){
        return;
    }

    localStorage.clear();

    window.location.href =
    "../auth/login.html";
}