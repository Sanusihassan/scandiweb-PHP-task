<?php

namespace App\Controller;

use GraphQL\GraphQL as GraphQLBase;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use GraphQL\Type\SchemaConfig;
use RuntimeException;
use Throwable;
use App\GraphQL\Query\RootQuery;
use App\GraphQL\Mutation\RootMutation;
use App\GraphQL\Type\ProductType;
use App\GraphQL\Type\CategoryType;

class GraphQL
{
    static public function handle()
    {
        try {
            $queryType = new ObjectType([
                'name' => 'Query',
                'fields' => [
                    'categories' => [
                        'type' => Type::listOf(CategoryType::getType()),
                        'resolve' => [RootQuery::class, 'categories'],
                    ],
                    'products' => [
                        'type' => Type::listOf(ProductType::getType()),
                        'resolve' => [RootQuery::class, 'products'],
                    ],
                ],
            ]);

            $mutationType = new ObjectType([
                'name' => 'Mutation',
                'fields' => [
                    // You can add mutations here if needed
                ],
            ]);

            $schema = new Schema((new SchemaConfig())
                ->setQuery($queryType)
                ->setMutation($mutationType)
            );

            $rawInput = file_get_contents('php://input');
            if ($rawInput === false) {
                throw new RuntimeException('Failed to get php://input');
            }

            $input = json_decode($rawInput, true);
            $query = $input['query'];
            $variableValues = $input['variables'] ?? null;

            $result = GraphQLBase::executeQuery($schema, $query, null, null, $variableValues);
            $output = $result->toArray();
        } catch (Throwable $e) {
            $output = [
                'error' => [
                    'message' => $e->getMessage(),
                ],
            ];
        }

        header('Content-Type: application/json; charset=UTF-8');
        return json_encode($output);
    }
}