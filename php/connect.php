<?php

//Connect.php
//This script connects to the MySQL database
//The database is called usermanagement and has a table called users
//The table has 4 fields: id(automatically added),username, password, and email

//Connect to the MySQL database
$server = 'localhost';
$username = 'root';
$password = '';
$database = 'usermanager';

$conn = mysqli_connect($server, $username, $password, $database);

if(!$conn)
{
    die('Connection failed: '.mysqli_connect_error());
}
?>