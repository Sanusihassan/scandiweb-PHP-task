<?php

require_once __DIR__ . '/../vendor/autoload.php';

use App\Database\ProductRepository;

header('Content-Type: application/json');

try {
    $productRepository = new ProductRepository();
    $products = $productRepository->getAllProducts();

    echo json_encode($products);
} catch (Exception $e) {
    // Handle exception
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => $e->getMessage()]);
}
