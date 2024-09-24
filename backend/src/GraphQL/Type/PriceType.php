<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class PriceType
{
    private static $type;

    public static function getType()
    {
        if (self::$type === null) {
            self::$type = new ObjectType([
                'name' => 'Price',
                'fields' => [
                    'amount' => Type::nonNull(Type::float()),
                    'currency' => Type::nonNull(CurrencyType::getType()),
                ],
            ]);
        }
        return self::$type;
    }
}