<?php

namespace App\GraphQL\Query;

use App\Database\ProductRepository;
use App\Database\CategoryRepository;

class RootQuery
{
    public function categories($rootValue, $args)
    {
        $repository = new CategoryRepository();
        return $repository->getAllCategories();
    }

    public function products($rootValue, $args)
    {
        $repository = new ProductRepository();
        return $repository->getAllProducts();
    }
}