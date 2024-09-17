<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class CurrencyType
{
    private static $type;

    public static function getType()
    {
        if (self::$type === null) {
            self::$type = new ObjectType([
                'name' => 'Currency',
                'fields' => [
                    'label' => Type::nonNull(Type::string()),
                    'symbol' => Type::nonNull(Type::string()),
                ],
            ]);
        }
        return self::$type;
    }
}