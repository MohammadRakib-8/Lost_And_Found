

let loginBTN=document.getElementById("adminPageBTN");
let searchBTN=document.getElementById("search");
let report_BTN=document.getElementById("reportBTN");
let view_All_ItemBTN=document.getElementById("viewAllItemBTN");
let about_US_BTN=document.getElementById("aboutUSBTN");
let contact_US_BTN=document.getElementById("contactUSBTN");
let 
//Admin Page Work

//Page Button Working Functionality Implementation :)

report_BTN.addEventListener('click',(event)=>{

    window.open("report_page.html","_self");
});
loginBTN.addEventListener('click',(event)=>{
window.open("login.html","_self");
});
view_All_ItemBTN.addEventListener('click',(event)=>{
window.open("view_found_item.html","_self");
});
about_US_BTN.addEventListener('click',(event)=>{
window.open("about_us.html","_self");
});
contact_US_BTN.addEventListener('click',(event)=>{
window.open("contact_us.html","_self");
});

// Search button for home page left to implement ----------------
// -------------------------------
login