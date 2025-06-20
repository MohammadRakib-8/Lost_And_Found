<?php
require "db_connect.php";

$query="SELECT MANAGER_ID,FULL_NAME,EMAIL FROM MANAGERS ";
$stid=oci_parse($conn,$query);
oci_execute($stid);

$manager=[];

while($row=oci_fetch_assoc($stid)){
$manager[]=$row;

}
header('Content-Type:application/json');
echo json_encode($manager);

oci_close($conn);

?>