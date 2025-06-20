<?php
require 'db_connect.php';
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    // FETCH all managers
    $query = "SELECT MANAGER_ID, FULL_NAME, EMAIL FROM MANAGERS";
    $stid = oci_parse($conn, $query);
    oci_execute($stid);

    $managers = [];
    while ($row = oci_fetch_assoc($stid)) {
        $managers[] = $row;
    }

    echo json_encode($managers);
}

elseif ($method === 'POST') {
    $action = $_POST['action'] ?? '';

    if ($action === 'delete') {
        $id = $_POST['managerId'];
        $query = "DELETE FROM MANAGERS WHERE MANAGER_ID = :id";
        $stmt = oci_parse($conn, $query);
        oci_bind_by_name($stmt, ':id', $id);

        if (oci_execute($stmt)) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error']);
        }
    }

    elseif ($action === 'update') {
        $id = $_POST['managerId'];
        $name = $_POST['fullName'];
        $email = $_POST['email'];

        $query = "UPDATE MANAGERS SET FULL_NAME = :name, EMAIL = :email WHERE MANAGER_ID = :id";
        $stmt = oci_parse($conn, $query);
        oci_bind_by_name($stmt, ':name', $name);
        oci_bind_by_name($stmt, ':email', $email);
        oci_bind_by_name($stmt, ':id', $id);

        if (oci_execute($stmt)) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error']);
        }
    }
}

oci_close($conn);
?>
