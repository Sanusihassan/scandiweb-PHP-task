<?php
require_once __DIR__ . '/../vendor/autoload.php';

use App\Database\DatabaseConnection;
use App\Database\DatabasePopulator;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

$dbConnection = DatabaseConnection::getInstance();
$pdo = $dbConnection->getConnection();

try {
    // Read and execute SQL file
    $sql = file_get_contents(__DIR__ . '/../setup.sql');
    $statements = array_filter(array_map('trim', explode(';', $sql)));

    foreach ($statements as $statement) {
        if (stripos($statement, 'CREATE DATABASE') !== false) {
            continue;
        }
        if (stripos($statement, 'USE') !== false) {
            continue;
        }
        $pdo->exec($statement);
    }

    // Populate the database
    $populator = new DatabasePopulator();
    $populator->populate(__DIR__ . '/../data.json');
} catch (\PDOException $e) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }
    echo "Database Error: " . $e->getMessage() . "\n";
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}
