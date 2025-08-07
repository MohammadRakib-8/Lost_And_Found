
//Home page btn
document.addEventListener("DOMContentLoaded", function () {

const loginBTN=document.getElementById("homePageLoginBTN");
const searchBTN=document.getElementById("search");
const report_BTN=document.getElementById("reportBTN");
const view_All_ItemBTN=document.getElementById("viewAllItemBTN");
const about_US_BTN=document.getElementById("aboutUSBTN");
const contact_US_BTN=document.getElementById("contactUSBTN");
const foundItemPage=document.getElementById("foundItemPageID");
      //Admin page btn
      const fullHomePage=document.getElementById("fullHomePage");
const regestrationAP=document.getElementById("regForM_Btn");
const manageManagerAP=document.getElementById("manageM_Btn");
const statisticsAP=document.getElementById("statisticsBtn");
const logoutAPMP=document.getElementById("belowDivLogout");
const rightSideDivAP=document.querySelector(".rightSideDivA")
      // Admin Page Work

// Page Button Working Functionality Implementation :)
if(about_US_BTN){
about_US_BTN.addEventListener('click',()=>{
window.open("about_us.html","_self");
})
}

if(report_BTN){
report_BTN.addEventListener('click',(event)=>{

   window.open("report_page.html","_self");
});}

if(loginBTN){
 loginBTN.addEventListener('click',(event)=>{
 window.open("login.html","_self");
 });

}
if(view_All_ItemBTN)
view_All_ItemBTN.addEventListener('click',()=>{
//window.open("view_found_item.html","_self");

fetch("../php/found_item_list.php")
.then(response=>response.json())
.then(foundItems=>{
let html=` <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #c6f0b4, #9be6a6, #7dd87a, #52c76f);
            background-size: 400% 400%;
            animation: moveGradient 15s ease infinite;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding: 40px 20px;
        }
        @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        h1 {
            color: #fff;
            margin-bottom: 30px;
            font-size: 2.5rem;
            font-weight: bold;
            text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
        }

        #foundItemsContainer {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 18px;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
            padding: 30px;
            width: 95%;
            max-width: 1100px;
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            color: #222;
            font-size: 1rem;
            border-radius: 12px;
            overflow: hidden;
        }

        th, td {
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 14px 16px;
            text-align: center;
        }

        th {
            background: rgba(76, 175, 80, 0.9);
            color: #fff;
            font-weight: bold;
        }

        td {
            background: rgba(255, 255, 255, 0.3);
            color: #1a1a1a;
        }

        button.claim-btn {
            padding: 10px 18px;
            background-color: #4caf50;
            color: #fff;
            font-weight: bold;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        button.claim-btn:hover:not(:disabled) {
            background-color: #2e7d32;
            transform: scale(1.05);
        }

        button.claim-btn:disabled {
            background-color: #9e9e9e;
            cursor: not-allowed;
        }

        @media (max-width: 768px) {
            th, td {
                font-size: 14px;
            }
            button.claim-btn {
                padding: 8px 14px;
                font-size: 14px;
            }
        }
    </style>
<div class=found-item-table>
<h1>Found Items List</h1>
<table>
<tr>
<th>Found Item ID</th>
<th>Name</th>
<th>Description</th>
<th>Found Date</th>
<th>Location</th>
<th>Status</th>
<th>Manager ID</th>
</tr>`

for(let founI of foundItems){
      html+=`
      <tr>
<td>${founI.FOUND_ITEM_ID}</td>
<td>${founI.FOUND_ITEM_NAME}</td>
<td>${founI.DESCRIPTION}</td>
<td>${founI.FOUND_DATE}</td>
<td>${founI.STATUS}</td>
<td>${founI.FOUND_LOCATION}</td>
<td>${founI.MANAGER_ID}</td>
      </tr>
      `
}
html+=`</table>
</div>`
fullHomePage.innerHTML=html;

})
.catch(error=>{
      fullHomePage.innerHTML=`<p style="color:red;">Error loading data:${error}</p>`;
})

})


});

// about_US_BTN.addEventListener('click',(event)=>{
// window.open("about_us.html","_self");
// });
// contact_US_BTN.addEventListener('click',(event)=>{
// window.open("contact_us.html","_self");
// });

// Search button for home page left to implement ----------------
// -------------------------------



//Admin Dashboard 
