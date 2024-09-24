<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class ProductType
{
    private static $type;

    public static function getType()
    {
        if (self::$type === null) {
            self::$type = new ObjectType([
                'name' => 'Product',
                'fields' => [
                    'id' => Type::nonNull(Type::string()),
                    'name' => Type::nonNull(Type::string()),
                    'inStock' => Type::nonNull(Type::boolean()),
                    'gallery' => Type::listOf(Type::string()),
                    'description' => Type::string(),
                    'category' => Type::string(),
                    'attributes' => Type::listOf(AttributeSetType::getType()),
                    'prices' => Type::listOf(PriceType::getType()),
                    'brand' => Type::string(),
                ],
            ]);
        }
        return self::$type;
    }
}