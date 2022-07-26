<?php
header('Access-Control-Allow-Origin: *');
$host = "localhost";
$user = "root";
$password = "simple4345";
$dbname="react_test";
$id= '';

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

switch($method){
    case 'GET':
        $sql = "select * from form_table";
        break;
    case 'POST':
        $title = $_POST["title"];
        $body = $_POST["body"];
        $id = 0;

        $sql = "insert into form_table (id, title, body) values ( '$id', '$title', '$body')";
        break;
}

$result = mysqli_query($con,$sql);

if(!$result){
    https_response_code(404);
    die(mysqli_error($con));
}

if($method == 'GET'){
    if (!$id) echo '[';
    for($i=0; $i<mysqli_num_rows($result); $i++){
        echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
}
elseif ($method == 'POST'){
    echo json_encode($result);
}
else{
    echo mysqli_affected_rows($con);
}
$con->close();