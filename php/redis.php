<?php
// Redis connection parameters
$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

if (!$redis->ping()) {
    die('Redis connection failed');
}
?>
