<?php


// Check if the user is logged in, If logged in, send the javascript to change the button to my profile

include 'connect.php';


session_start();

// Check if the user is logged in

if(isset($_SESSION['user_id'])){

    $user_id = $_SESSION['user_id'];

    $query = "SELECT * FROM users WHERE user_id = '$user_id'";

    $result = mysqli_query($conn, $query);

    $row = mysqli_fetch_assoc($result);

    $username = $row['username'];

    $profile_pic = $row['profile_pic'];

    $profile_pic = "uploads/".$profile_pic;

    $profile_pic = "<img src='$profile_pic' class='img-circle' style='width: 30px; height: 30px;'>";

    echo "<script>document.getElementById('login').innerHTML = '$profile_pic $username';</script>";

    echo "<script>document.getElementById('login').href = 'profile.php';</script>";

    echo "<script>document.getElementById('signup').innerHTML = 'Logout';</script>";

    echo "<script>document.getElementById('signup').href = 'logout.php';</script>";

}



?>