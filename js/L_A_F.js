
//Home page btn

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

report_BTN.addEventListener('click',(event)=>{

   window.open("report_page.html","_self");
});
 loginBTN.addEventListener('click',(event)=>{
 window.open("login.html","_self");
 });

view_All_ItemBTN.addEventListener('click',()=>{
//window.open("view_found_item.html","_self");

fetch("../php/found_item_list.php")
.then(response=>response.json())
.then(foundItems=>{
let html=`
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
