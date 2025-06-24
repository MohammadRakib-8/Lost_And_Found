<?php
///////////////////////////////////////////////
require_once 'db_connect.php';  // your Oracle DB connection

header('Content-Type: application/json');

$sql = "SELECT LOST_ITEM_ID, LOST_ITEM_NAME, DESCRIPTION, TO_CHAR(REPORT_DATE, 'YYYY-MM-DD') REPORT_DATE, LOST_LOCATION, TO_CHAR(LOST_DATE, 'YYYY-MM-DD') LOST_DATE, STATUS, USER_ID FROM lostitems";
$statement = oci_parse($conn, $sql);

if (!$statement) {
    echo json_encode(["error" => "SQL parse failed"]);
    exit;
}

if (!oci_execute($statement)) {
    echo json_encode(["error" => "SQL execution failed"]);
    exit;
}

$lostItems = [];
while ($row = oci_fetch_assoc($statement)) {
    $lostItems[] = $row;
}

echo json_encode($lostItems);

oci_free_statement($statement);
oci_close($conn);
?>
