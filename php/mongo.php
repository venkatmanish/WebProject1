<?php
// MongoDB connection parameters
$mongoClient = new MongoDB\Client("mongodb://localhost:27017");

// Select MongoDB database and collection
$database = $mongoClient->selectDatabase('your_mongodb_database');
$collection = $database->selectCollection('your_mongodb_collection');
?>
