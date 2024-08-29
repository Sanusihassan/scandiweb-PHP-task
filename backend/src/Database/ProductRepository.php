<?php

namespace App\Database;

use PDO;
use PDOException;

class ProductRepository
{
    private PDO $connection;

    public function __construct()
    {
        $this->connection = DatabaseConnection::getInstance()->getConnection();
    }

    public function getAllProducts(): array
    {
        $query = 'SELECT * FROM products'; // Adjust table name if different

        try {
            $stmt = $this->connection->query($query);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            // Handle query error
            throw new PDOException($e->getMessage(), (int)$e->getCode());
        }
    }
}
