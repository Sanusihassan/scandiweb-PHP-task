<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AttributeSetType
{
    private static $type;

    public static function getType()
    {
        if (self::$type === null) {
            self::$type = new ObjectType([
                'name' => 'AttributeSet',
                'fields' => [
                    'id' => Type::nonNull(Type::string()),
                    'name' => Type::nonNull(Type::string()),
                    'type' => Type::nonNull(Type::string()),
                    'items' => Type::listOf(AttributeType::getType()),
                ],
            ]);
        }
        return self::$type;
    }
}