<?php

namespace App\Database;

use App\Database\DatabaseConnection;

class DatabasePopulator
{
    private $db;

    public function __construct()
    {
        $this->db = DatabaseConnection::getInstance()->getConnection();
    }

    public function populate(string $jsonFilePath)
    {
        $jsonData = file_get_contents($jsonFilePath);
        $data = json_decode($jsonData, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \RuntimeException('Invalid JSON file');
        }

        $this->db->beginTransaction();

        try {
            $this->populateCategories($data['data']['categories']);
            $this->populateProducts($data['data']['products']);
            
            $this->db->commit();
        } catch (\Exception $e) {
            $this->db->rollBack();
            throw $e;
        }
    }

    private function populateCategories(array $categories)
    {
        $stmt = $this->db->prepare("INSERT IGNORE INTO categories (name) VALUES (:name)");
        foreach ($categories as $category) {
            $stmt->execute(['name' => $category['name']]);
        }
    }

    private function populateProducts(array $products)
    {
        $stmtProduct = $this->db->prepare("INSERT INTO products (id, name, inStock, description, category, brand) VALUES (:id, :name, :inStock, :description, :category, :brand)");
        $stmtGallery = $this->db->prepare("INSERT INTO product_gallery (product_id, image_url) VALUES (:product_id, :image_url)");
        $stmtAttribute = $this->db->prepare("INSERT IGNORE INTO attributes (id, name, type) VALUES (:id, :name, :type)");
        $stmtAttributeItem = $this->db->prepare("INSERT INTO attribute_items (attribute_id, display_value, value) VALUES (:attribute_id, :display_value, :value)");
        $stmtProductAttribute = $this->db->prepare("INSERT INTO product_attributes (product_id, attribute_id) VALUES (:product_id, :attribute_id)");
        $stmtPrice = $this->db->prepare("INSERT INTO prices (product_id, amount, currency_label, currency_symbol) VALUES (:product_id, :amount, :currency_label, :currency_symbol)");

        foreach ($products as $product) {
            $stmtProduct->execute([
                'id' => $product['id'],
                'name' => $product['name'],
                'inStock' => $product['inStock'],
                'description' => $product['description'],
                'category' => $product['category'],
                'brand' => $product['brand']
            ]);

            foreach ($product['gallery'] as $image) {
                $stmtGallery->execute(['product_id' => $product['id'], 'image_url' => $image]);
            }

            foreach ($product['attributes'] as $attribute) {
                $stmtAttribute->execute([
                    'id' => $attribute['id'],
                    'name' => $attribute['name'],
                    'type' => $attribute['type']
                ]);
                $stmtProductAttribute->execute(['product_id' => $product['id'], 'attribute_id' => $attribute['id']]);

                foreach ($attribute['items'] as $item) {
                    $stmtAttributeItem->execute([
                        'attribute_id' => $attribute['id'],
                        'display_value' => $item['displayValue'],
                        'value' => $item['value']
                    ]);
                }
            }

            foreach ($product['prices'] as $price) {
                $stmtPrice->execute([
                    'product_id' => $product['id'],
                    'amount' => $price['amount'],
                    'currency_label' => $price['currency']['label'],
                    'currency_symbol' => $price['currency']['symbol']
                ]);
            }
        }
    }
}