<?php

$allowed_origins = [
    "https://icssdda.com","https://www.icssdda.com",
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
}



// header("Access-Control-Allow-Origin: *");

// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");