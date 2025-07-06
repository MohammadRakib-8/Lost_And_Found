<?php
require "db_connect.php";

if($_SERVER["REQUEST_METHOD"]=="POST"){
$foundItemName=$_POST['foundItemName'];
$description=$_POST['description'];
$foundDate=$_POST['foundDate'];
$status=$_POST['status'];
$foundLocation=$_POST['foundLocation'];
$managerId=$_POST['managerId'];

$sql="INSERT INTO FOUNDITEMS(FOUND_ITEM_NAME,DESCRIPTION,FOUND_DATE,STATUS,FOUND_LOCATION,MANAGER_ID)
    VALUES(:foundItemNM, :description, TO_DATE(:foundDate, 'YYYY-MM-DD'),:status,:foundLocation,:managerID)";

    $statement=oci_parse($conn,$sql);

    oci_bind_by_name($statement,":foundItemNM",$foundItemName);
    oci_bind_by_name($statement,":description",$description);
oci_bind_by_name($statement,":foundDate",$foundDate);
oci_bind_by_name($statement,":status",$status);
oci_bind_by_name($statement,":foundLocation",$foundLocation);
oci_bind_by_name($statement,":managerID",$managerId);

if(oci_execute($statement)){
    echo "<script>alert('Found Item Added Sucessfully :)');window.history.back();</script>";

}
else{
    $error=oci_error($statement);
    echo "Error Occured".$error['message'];
}

oci_free_statement($statement);
oci_close($conn);
}



?>