<?php 
$conn=oci_connect('lafms','rkpr','localhost/XE');
if(!$conn){
    $error=oci_error();
    echo "Connection failed" .$error[message];
    exit;
}
?>