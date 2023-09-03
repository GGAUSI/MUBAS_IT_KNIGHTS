<?php 

    session_start();

    $array_data = Array(
        'accName' => $_SESSION['account_name'],
        'account_number' => $_SESSION['account_number'],
        'account_type' => $_SESSION['account_type'],
        'branch_name' => $_SESSION['branch_name'],
        'bank_balance' => $_SESSION['bank_balance']

    );
    echo json_encode($array_data);
?>
