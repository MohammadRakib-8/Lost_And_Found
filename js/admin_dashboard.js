const manageManagerAP=document.getElementById("manageM_Btn");
const statisticsAP=document.getElementById("statisticsBtn");
const logoutAPMP=document.getElementsByClassName("belowDivLogout");
const rightSideDivAP=document.querySelector(".rightSideDivA");
const regestrationAP=document.getElementById("regForM_Btn");


regestrationAP.addEventListener('click',function(){
rightSideDivAP.innerHTML=`<form class="manager-registration-form" method="POST" action="../php/registrationManagerAP.php" >
    
    <label for="managerId">Manager ID:</label>
    <input type="number" id="managerId" name="managerId" placeholder="Enter Manager ID" required>

    <label for="fullName" id="nameMaReg">Full Name:</label>
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
const style = document.createElement("style");
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
`;

document.head.appendChild(style);

})

manageManagerAP.addEventListener('click',function(){
rightSideDivAP.innerHTML=`
<
`

})


// manageManagerAP.addEventListener('click',function(){
// <li>Manager 1</li>

// })