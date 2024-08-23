<?php

require_once __DIR__ . '/vendor/autoload.php';

use App\Database\DatabaseConnection;
use App\Database\DatabasePopulator;

// Load environment variables
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Get database connection
$dbConnection = DatabaseConnection::getInstance();
$populator = new DatabasePopulator($dbConnection);

try {
    $populator->populate(__DIR__ . '/data.json');
    echo "Database populated successfully.\n";
} catch (\Exception $e) {
    echo "Error populating database: " . $e->getMessage() . "\n";
}