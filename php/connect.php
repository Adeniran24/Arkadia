<?php


$server = '92.113.22.21:3306';
$username = 'u963849950_Arkadia';
$password = 'Arkadia1234';
$database = 'u963849950_Arkadia';

$conn = mysqli_connect($server, $username, $password, $database);

if(!$conn)
{
    die('Connection failed: '.mysqli_connect_error());
}
?>