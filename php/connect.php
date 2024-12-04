<?php

//Connect.php
//This script connects to the MySQL database
//The database is called usermanagement and has a table called users
//The table has 4 fields: id(automatically added),username, password, and email

//Connect to the MySQL database
$server = '92.113.22.16:3306';
$username = 'u963849950_Adeniran';
$password = 'Kutya1234';
$database = 'u963849950_users';

$conn = mysqli_connect($server, $username, $password, $database);

if(!$conn)
{
    die('Connection failed: '.mysqli_connect_error());
}
?>