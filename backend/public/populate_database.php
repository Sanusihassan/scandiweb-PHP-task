<?php
require_once __DIR__ . '/../vendor/autoload.php';
use App\Database\DatabaseConnection;
use App\Database\DatabasePopulator;

// Load environment variables
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

// Get database connection
$dbConnection = DatabaseConnection::getInstance();
$pdo = $dbConnection->getConnection();

try {
    // Read the SQL file
    $sql = file_get_contents(__DIR__ . '/../schemas.sql');
    
    // Split the SQL file into individual statements
    $statements = array_filter(array_map('trim', explode(';', $sql)));
    
    // Execute each SQL statement
    foreach ($statements as $statement) {
        if (stripos($statement, 'CREATE DATABASE') !== false) {
            // Skip CREATE DATABASE statement
            continue;
        }
        if (stripos($statement, 'USE') !== false) {
            // Skip USE statement
            continue;
        }
        $pdo->exec($statement);
    }
    
    echo "Database schema created successfully.\n";
    
    // Populate the database
    $populator = new DatabasePopulator($dbConnection);
    $populator->populate(__DIR__ . '/../data.json');
    
    echo "Database populated successfully.\n";
} catch (\PDOException $e) {
    echo "Database Error: " . $e->getMessage() . "\n";
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}