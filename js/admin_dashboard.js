const manageManagerAP = document.getElementById("manageM_Btn");
const statisticsAP = document.getElementById("statisticsBtn");
const logoutAPMP = document.getElementsByClassName("belowDivLogout");
const rightSideDivAP = document.querySelector(".rightSideDivA");
const regestrationAP = document.getElementById("regForM_Btn");

regestrationAP.addEventListener("click", function () {
    rightSideDivAP.innerHTML = `
    <form class="manager-registration-form" method="POST" action="../php/registrationManagerAP.php">
        <label for="managerId">Manager ID:</label>
        <input type="number" id="managerId" name="managerId" placeholder="Enter Manager ID" required>
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" name="managerName" placeholder="Type full name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="managerEmail" placeholder="Type email" required>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="managerPhone" placeholder="Type phone number" required pattern="[0-9]{10,15}" title="Enter a valid phone number (10–15 digits)">
        <label for="password">Password:</label>
        <input type="password" id="password" name="managerPassword" placeholder="Type password" required>
        <button type="submit">Register</button>
    </form>
    `;

    if (!document.getElementById("dynamic-style")) {
        const style = document.createElement("style");
        style.id = "dynamic-style";
        style.textContent = `
            .manager-registration-form {
                display: flex;
                flex-direction: column;
                gap: 12px;
                max-width: 450px;
                margin: 40px auto;
                padding: 30px;
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 8px 16px rgba(0,0,0,0.1);
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .manager-registration-form label {
                font-weight: 600;
                margin-bottom: 4px;
                color: #333;
            }
            .manager-registration-form input {
                padding: 10px 14px;
                border: 1px solid #ccc;
                border-radius: 8px;
                font-size: 15px;
                transition: border-color 0.3s;
            }
            .manager-registration-form input:focus {
                border-color: #007BFF;
                outline: none;
                background-color: #f0f8ff;
            }
            .manager-registration-form button {
                padding: 12px;
                background-color: #007BFF;
                color: #fff;
                font-weight: bold;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                transition: background-color 0.3s;
            }
            .manager-registration-form button:hover {
                background-color: #0056b3;
            }
            .managers-table-wrapper {
                max-width: 900px;
                margin: 30px auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 12px;
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .managers-table-wrapper h2 {
                text-align: center;
                margin-bottom: 20px;
                color: #2c3e50;
            }
            .managers-table-wrapper table {
                width: 100%;
                border-collapse: collapse;
                font-size: 15px;
            }
            .managers-table-wrapper th,
            .managers-table-wrapper td {
                border: 1px solid #ddd;
                padding: 12px 15px;
                text-align: center;
            }
            .managers-table-wrapper th {
                background-color: #007BFF;
                color: white;
                font-weight: bold;
            }
            .managers-table-wrapper tr:nth-child(even) {
                background-color: #f9f9f9;
            }
            .managers-table-wrapper tr:hover {
                background-color: #eef6ff;
            }
            .managers-table-wrapper button {
                padding: 6px 10px;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                cursor: pointer;
                margin: 0 4px;
                transition: background-color 0.3s ease;
            }
            .managers-table-wrapper button:hover {
                opacity: 0.9;
            }
            .managers-table-wrapper button:nth-child(1) {
                background-color: #e74c3c;
                color: white;
            }
            .managers-table-wrapper button:nth-child(2) {
                background-color: #28a745;
                color: white;
            }
        `;
        document.head.appendChild(style);
    }
});

manageManagerAP.addEventListener("click", () => {
    fetch("../php/manageManagerAP.php")
        .then(response => response.json())
        .then(managers => {
            let html = `
                <div class="managers-table-wrapper">
                <h2>Managers Details</h2>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>`;
            for (let m of managers) {
                html += `
                    <tr>
                        <td>${m.MANAGER_ID}</td>
                        <td>${m.FULL_NAME}</td>
                        <td>${m.EMAIL}</td>
                        <td>
                            <button onclick="deleteManager('${m.MANAGER_ID}')">Delete</button>
                            <button onclick="showUpdateForm('${m.MANAGER_ID}', '${m.FULL_NAME}', '${m.EMAIL}')">Update</button>
                        </td>
                    </tr>`;
            }
            html += `</table></div>`;
            rightSideDivAP.innerHTML = html;
        });
});
/////////////
window.deleteManager = function (managerId) {
    if (confirm("Are you sure you want to delete this manager?")) {
        fetch("../php/manageManagerAP.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `action=delete&managerId=${managerId}`
        })
            .then(res => res.json())
            .then(data => {
                alert(data.status === "success" ? "Deleted" : "Error deleting");
                manageManagerAP.click();
            });
    }
};

window.showUpdateForm = function (id, name, email) {
    rightSideDivAP.innerHTML = `
        <h2 style="text-align:center; margin-bottom:20px;">Update Manager</h2>
        <form id="updateForm" class="manager-registration-form" style="max-width:450px;">
            <input type="hidden" name="managerId" value="${id}">
            <label for="fullName">Full Name:</label>
            <input type="text" name="fullName" value="${name}" required>
            <label for="email">Email:</label>
            <input type="email" name="email" value="${email}" required>
            <button type="submit">Update</button>
        </form>
    `;

    document.getElementById("updateForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch("../php/manageManagerAP.php", {
            method: "POST",
            body: new URLSearchParams({
                action: "update",
                managerId: formData.get("managerId"),
                fullName: formData.get("fullName"),
                email: formData.get("email")
            })
        })
            .then(res => res.json())
            .then(data => {
                alert(data.status === "success" ? "Updated" : "Error updating");
                manageManagerAP.click();
            });
    });
};
