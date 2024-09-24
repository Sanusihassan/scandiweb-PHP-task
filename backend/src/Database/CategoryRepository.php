<?php

namespace App\Database;

use PDO;

class CategoryRepository
{
    private $db;

    public function __construct()
    {
        $this->db = DatabaseConnection::getInstance()->getConnection();
    }

    public function getAllCategories(): array
    {
        $stmt = $this->db->prepare("SELECT * FROM categories");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getCategoryByName(string $name): ?array
    {
        $stmt = $this->db->prepare("SELECT * FROM categories WHERE name = :name");
        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC) ?: null;
    }

    // Add more methods as needed, e.g., addCategory, updateCategory, deleteCategory
}

?>
