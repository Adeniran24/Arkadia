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






//Insert the record
$query = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";

//Run the query
$result = mysqli_query($db, $query);

//Check if the query was successful
if($result)
{
    echo 'Record added';
}
else
{
    echo 'Error adding record';
}













?>