<?php

//Register.php
//This script performs an INSERT query to add a record to the users table
//A record has 4 fields: id(automatically added),username, password, and email

//Connect to the MySQL database
require 'connect.php';

//Get the POST variables

$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

//Check if the record already exists
$query = "SELECT * FROM users WHERE username='$username' OR email='$email'";
$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result) > 0)
{
    
   
    echo 'Record already exists';

    header('refresh:3; url=../logreg.html');
    
}
else
{
    
    $query = "INSERT INTO users(username, password, email) VALUES('$username', '$password', '$email')";
    $result = mysqli_query($conn, $query);
    
    if($result)
    {
        echo 'Record added';
    }
    else
    {
        echo 'Record not added';
    }
}





















?>