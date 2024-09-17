<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeType
{
    private static $type;

    public static function getType()
    {
        if (self::$type === null) {
            self::$type = new ObjectType([
                'name' => 'Attribute',
                'fields' => [
                    'id' => Type::nonNull(Type::string()),
                    'displayValue' => Type::nonNull(Type::string()),
                    'value' => Type::nonNull(Type::string()),
                ],
            ]);
        }
        return self::$type;
    }
}