const lostItemReportListBTN = document.getElementById("reportLostItemTitle");
const foundItemReportListBTN = document.getElementById("foundItemTilte");
const claimItemListBTN = document.getElementById("claimItemTitle");
const logoutBTN = document.querySelector(".managerLogout");
const rightSideDiv = document.getElementById("rightSideDivManager");


lostItemReportListBTN.addEventListener('click', function () {
    fetch("../php/report_lost_Item_list_MP.php")
        .then(response => response.json())
        .then(lostItems => {
            let html = `
                <style>
                    .report-lost-item-table {
                        padding: 20px;
                        font-family: Arial, sans-serif;
                    }
                    .report-lost-item-table h1 {
                        text-align: center;
                        color: #2c3e50;
                        margin-bottom: 20px;
                    }
                    .report-lost-item-table table {
                        width: 100%;
                        border-collapse: collapse;
                        background: #fff;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    }
                    .report-lost-item-table th, .report-lost-item-table td {
                        padding: 12px;
                        text-align: center;
                        border-bottom: 1px solid #ddd;
                    }
                    .report-lost-item-table th {
                        background-color: #2980b9;
                        color: white;
                    }
                    .report-lost-item-table tr:hover {
                        background-color: #f1f1f1;
                    }
                    .update-btn {
                        background-color: #27ae60;
                        color: white;
                        border: none;
                        padding: 6px 12px;
                        cursor: pointer;
                        border-radius: 4px;
                        transition: background-color 0.3s ease;
                    }
                    .update-btn:hover {
                        background-color: #1e8449;
                    }
                </style>
                <div class="report-lost-item-table">
                    <h1>Reported Lost Item LIST</h1>
                    <table>
                        <tr>
                            <th>Lost Item ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Report Date</th>
                            <th>Lost Location</th>
                            <th>Lost Date</th>
                            <th>Status</th>
                            <th>Reporter ID</th>
                            <th>Action</th>
                        </tr>`;

            for (let item of lostItems) {
                html += `
                    <tr>
                        <td>${item.LOST_ITEM_ID}</td>
                        <td>${item.LOST_ITEM_NAME}</td>
                        <td>${item.DESCRIPTION}</td>
                        <td>${item.REPORT_DATE}</td>
                        <td>${item.LOST_LOCATION}</td>
                        <td>${item.LOST_DATE}</td>
                        <td>${item.STATUS}</td>
                        <td>${item.USER_ID}</td>
                        <td><button class="update-btn" onclick="alert('Update feature coming soon!')">Update Status</button></td>
                    </tr>`;
            }

            html += `</table></div>`;
            rightSideDiv.innerHTML = html;
        })
        .catch(error => {
            rightSideDiv.innerHTML = `<p style="color:red;">Error loading data: ${error}</p>`;
        });
});

////////////////////////
//
foundItemReportListBTN.addEventListener("click", () => {
    fetch("../php/found_item_list.php")
        .then(response => response.json())
        .then(foundItems => {
            let html = `
                <style>
                    .found-item-table {
                        padding: 20px;
                        font-family: Arial, sans-serif;
                    }
                    .found-item-table h1 {
                        text-align: center;
                        color: #27ae60;
                        margin-bottom: 20px;
                    }
                    .found-item-table table {
                        width: 100%;
                        border-collapse: collapse;
                        background: #fff;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    }
                    .found-item-table th, .found-item-table td {
                        padding: 12px;
                        text-align: center;
                        border-bottom: 1px solid #ddd;
                    }
                    .found-item-table th {
                        background-color: #27ae60;
                        color: white;
                    }
                    .found-item-table tr:hover {
                        background-color: #f1f1f1;
                    }
                </style>
                <div class="found-item-table">
                    <h1>Found Item LIST</h1>
                    <table>
                        <tr>
                            <th>Found Item ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Found Date</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Reporter ID</th>
                        </tr>`;

            for (let item of foundItems) {
                html += `
                    <tr>
                        <td>${item.FOUND_ITEM_ID}</td>
                        <td>${item.FOUND_ITEM_NAME}</td>
                        <td>${item.DESCRIPTION}</td>
                        <td>${item.FOUND_DATE}</td>
                        <td>${item.FOUND_LOCATION}</td>
                        <td>${item.STATUS}</td>
                        <td>${item.USER_ID}</td>
                    </tr>`;
            }

            html += `</table></div>`;
            rightSideDiv.innerHTML = html;
        })
        .catch(error => {
            rightSideDiv.innerHTML = `<p style="color:red;">Error loading data: ${error}</p>`;
        });
});









///////////
//////////////
claimItemListBTN.addEventListener("click", () => {
    fetch("../php/claim_item_list.php")
        .then(response => response.json())
        .then(claimItems => {
            let html = `
                <style>
                    .claim-item-table {
                        padding: 20px;
                        font-family: Arial, sans-serif;
                    }
                    .claim-item-table h1 {
                        text-align: center;
                        color: #c0392b;
                        margin-bottom: 20px;
                    }
                    .claim-item-table table {
                        width: 100%;
                        border-collapse: collapse;
                        background: #fff;
                        box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    }
                    .claim-item-table th, .claim-item-table td {
                        padding: 12px;
                        text-align: center;
                        border-bottom: 1px solid #ddd;
                    }
                    .claim-item-table th {
                        background-color: #c0392b;
                        color: white;
                    }
                    .claim-item-table tr:hover {
                        background-color: #f1f1f1;
                    }
                </style>
                <div class="claim-item-table">
                    <h1>Claim Item LIST</h1>
                    <table>
                        <tr>
                            <th>Claim ID</th>
                            <th>Status</th>
                            <th>Claim Date</th>
                            <th>Description</th>
                            <th>User ID</th>
                            <th>Manager ID</th>
                            <th>Found Item ID</th>
                        </tr>`;

            for (let item of claimItems) {
                html += `
                    <tr>
                        <td>${item.CLAIM_ID}</td>
                        <td>${item.STATUS}</td>
                        <td>${item.CLAIM_DATE}</td>
                        <td>${item.DESCRIPTION}</td>
                        <td>${item.USER_ID}</td>
                        <td>${item.MANAGER_ID}</td>
                        <td>${item.FOUND_ITEM_ID}</td>
                    </tr>`;
            }

            html += `</table></div>`;
            rightSideDiv.innerHTML = html;
        })
        .catch(error => {
            rightSideDiv.innerHTML = `<p style="color:red;">Error loading data: ${error}</p>`;
        });
});

logoutBTN.addEventListener("click", () => {
    window.location.href = "../html/login.html";
});
