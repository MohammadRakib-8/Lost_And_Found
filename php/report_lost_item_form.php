<?php

require 'db_connect.php';

if($_SERVER["REQUEST_METHOD"]=="POST"){
     $reporterName = $_POST['reporterName'];
    $reporterMobileNum = $_POST['reporterMobileNum'];
    $reporterId = $_POST['reporterId'];
    $itemName = $_POST['itemName'];
    $lostDate = $_POST['lostDate'];
    $lostLocation = $_POST['lostLocation'];
    $description = $_POST['description'];

$query="INSERT INTO LOSTITEMS( LOST_ITEM_ID, LOST_ITEM_NAME, DESCRIPTION, REPORT_DATE, LOST_LOCATION, LOST_DATE, STATUS, USER_ID) 
                       VALUES(:lostItemId,:lostItemName,:lostItemDescription,:reportDate,:lostLocation,:lostDate,:lostItemStatus,:userId)";
$stid=oci_parse($conn,$query);


oci_bind_by_name($stid, ":lostItemId", $lostItemId);
oci_bind_by_name($stid, ":lostItemName", $itemName);
oci_bind_by_name($stid, ":lostItemDescription", $description);
oci_bind_by_name($stid, ":reportDate", $reportDate);
oci_bind_by_name($stid, ":lostLocation", $lostLocation);
oci_bind_by_name($stid, ":lostDate", $lostDate);
oci_bind_by_name($stid, ":lostItemStatus", $status);
oci_bind_by_name($stid, ":userId", $reporterId);

if (oci_execute($stid)) {
    echo "<script>alert('Lost Item Details successfully Submitted'); window.history.back();</script>";//
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

