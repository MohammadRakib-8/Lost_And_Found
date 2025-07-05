<?php
require "db_connect.php";

header('Content-Type:application/json');



if(!$conn){

    $error=oci_error();

    echo "Connection failed".$error[message];
    exit;
}

$sql="SELECT * FROM founditems";

$statement=oci_parse($conn,$sql);

if(!oci_execute($statement)){
    $error= oci_error($statement);  //$e = oci_error($conn);
    echo "Error Occured".$error[message];
    exit;
}
$FoundItems=[];

while($row=oci_fetch_assoc($statement)){
    $FoundItems[]=$row;
}
echo json_encode($FoundItems);
oci_free_statement($statement);
oci_close($conn);

?>