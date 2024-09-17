<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;

class RootMutation
{
    public function createOrder($rootValue, $args)
    {
        // Implement order creation logic
        // For now, return a dummy response
        return [
            'id' => uniqid(),
            'status' => 'created'
        ];
    }

    public static function getType()
    {
        return Type::string();
    }
}