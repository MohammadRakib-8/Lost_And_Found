<?php
require "db_connect.php";

header ("Content-Type:application/json");

if(!$conn){
    $error=oci_error($conn);
    echo "Connection failed".$error[message];
    exit;
}

$sql="SELECT * FROM LOSTITEMS";
$statement=oci_parse($conn,$sql);

if(!oci_execute($statement)){
    $error=oci_error($$statement);
    echo "Error Occured" .$error[message];
    exit;
}

$LostItems=[];
while($row=oci_fetch_assoc($statement)){
    $LostItems[]=$row;
}
echo json_encode($LostItems);
oci_free_statement($statement);
oci_close($conn);