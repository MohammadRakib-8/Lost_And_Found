<?php///////////////////////////
require_once 'db_connect.php'; 

header('Content-Type: application/json');

if (!$conn) {
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

$sql = "SELECT * FROM founditems";
$statement = oci_parse($conn, $sql);

if (!$statement) {
    $e = oci_error($conn);
    echo json_encode(["error" => "SQL parse error: " . $e['message']]);
    exit;
}
if (!oci_execute($statement)) {
    $e = oci_error($statement);
    echo json_encode(["error" => "SQL execution error: " . $e['message']]);
    exit;
}
$foundItems = [];
while ($row = oci_fetch_assoc($statement)) {
    $foundItems[] = $row;
}
echo json_encode($foundItems);
oci_free_statement($statement);
oci_close($conn);
?>
