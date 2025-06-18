<?php
require 'db_connect.php';
if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $email =$_POST['email'];
    $password=$_POST['password'];
}

if($role==="Manager"){
$query="SELECT * FROM MANAGERS WHERE EMAIL = :email AND PASSWORD = :password";
$stid=oci_parse($conn,$query)

    oci_bind_by_name($stid, ":email", $email);
    oci_bind_by_name($stid, ":password", $password);

     oci_execute($stid);
        if ($row = oci_fetch_assoc($stid)) {
        echo "Login successful. Welcome, " . htmlspecialchars($row['EMAIL']);
        // You can start a session here
        // session_start();
        // $_SESSION['email'] = $row['EMAIL'];
        // header("Location: dashboard.php");
    } else {
        echo "Invalid email or password.";
    }

    oci_free_statement($stid);
    oci_close($conn);
}

else{
    echo"Role not correctly selected";
}

?>