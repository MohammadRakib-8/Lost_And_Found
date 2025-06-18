<?php 
session_start();
require 'db_connect.php';

if($_SERVER["REQUEST_METHOD"]=="POST"){

$email=$_POST['email'];
$password=$_POST['password'];
$role=$_POST['role'];

$query="SELECT * FROM MANAGERS WHERE EMAIL= :email AND PASSWORD = :password";
$stid=oci_parse($conn,$query);

oci_bind_by_name($stid,":email",$email);
oci_bind_by_name($stid,":password",$password);

oci_execute($stid);



if($row =oci_fetch_assoc($stid)){
    // echo "Login Successful.Welcome {$row['FULL_NAME']}";
if($role==='Admin'){
    header("Location:../html/admin_dashboard.html");
}
   exit; 
}


else{
echo "Invalid email and pass";

}

oci_free_statement($stid);
oci_close($conn);
}
?>