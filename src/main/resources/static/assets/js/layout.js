function createSidebar(role = "admin", active = "") {

    let menu = "";

    if (role === "admin") {

        menu = `
            <li>
                <a class="${active === 'dashboard' ? 'active' : ''}"
                   href="../admin/dashboard.html">
                   Dashboard
                </a>
            </li>

            <li>
                <a class="${active === 'products' ? 'active' : ''}"
                   href="../admin/products.html">
                   Products
                </a>
            </li>

            <li>
                <a href="#">
                    Reports
                </a>
            </li>
            <li>
    <a class="${active === 'activity' ? 'active' : ''}"
       href="../admin/activity.html">
       Activity Logs
    </a>
</li>

            <li>
                <a class="${active === 'settings' ? 'active' : ''}"
                   href="../admin/dashboard.html?section=settings">
                   Settings
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
                <a class="${active === 'pos' ? 'active' : ''}"
                   href="../cashier/pos.html">
                   POS
                </a>
            </li>

            <li>
                <a class="${active === 'sales' ? 'active' : ''}"
                   href="../cashier/sales.html">
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

localStorage.removeItem("userRole");

window.location.href =
"../auth/login.html";


}
function addActivityLog(action, details){

    const logs =
        JSON.parse(
            localStorage.getItem(
                "activityLogs"
            )
        ) || [];

    logs.push({

        date:
            new Date().toLocaleString(),

        action:
            action,

        details:
            details

    });

    localStorage.setItem(
        "activityLogs",
        JSON.stringify(logs)
    );

}