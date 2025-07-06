<?php
require "db_connect.php";

header("Content_type:application/json");

if(!$conn){
    $error=oci_error($conn);
    echo "Connection failed" .$error["message"];
    exit;
}

$sql="SELECT USER_ID,FULL_NAME,ROLE,PHONE_NUMBER,EMAIL FROM USERS";

$statement=oci_parse($conn,$sql);

if(!oci_execute($statement)){
    $error=oci_error($statement);
    echo "Error occured".$error["message"];
    exit;
}

$UserDetails=[];
while($row=oci_fetch_assoc($statement)){
    $UserDetails[]=$row;
}
echo json_encode($UserDetails);
oci_free_statement($statement);
oci_close($conn);
?>