<?php
//Testing purpose---------------
// require 'db_connect.php';
// echo "Connected to Oracal!";
// oci_close($conn);
//--------------------------------

require 'db_connect.php';

if($_SERVER["REQUEST_METHOD"]=="POST"){
$managerId=$_POST['managerId'];
$managerName=$_POST['managerName'];
$managerEmail=$_POST['managerEmail'];
$managerPhone=$_POST['managerPhone'];
$managerPass=$_POST['managerPassword'];



    $query = "INSERT INTO MANAGERS (MANAGER_ID, FULL_NAME, EMAIL, PHONE_NUMBER,\"PASSWORD\")
              VALUES (:managerId, :managerName, :managerEmail, :managerPhone, :managerPassword)";
    
    $stid = oci_parse($conn, $query);

    oci_bind_by_name($stid, ":managerId", $managerId);
    oci_bind_by_name($stid, ":managerName", $managerName);
    oci_bind_by_name($stid, ":managerEmail", $managerEmail);
    oci_bind_by_name($stid, ":managerPhone", $managerPhone);
    oci_bind_by_name($stid, ":managerPassword", $managerPass);

    if (oci_execute($stid)) {
        echo "<script>alert('Manager registered successfully'); window.history.back();</script>";//
    } else {
        $e = oci_error($stid);
        echo "<script>alert('Error: " . htmlentities($e['message']) . "'); window.history.back();</script>";//
    }

    oci_free_statement($stid);
    oci_close($conn);
} else {
    echo "Invalid request.";
}
?>



