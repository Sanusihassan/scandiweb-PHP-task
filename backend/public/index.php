<?php
require_once __DIR__ . '/../vendor/autoload.php';

$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
    // Define a POST route for /graphql and map it to the handle method of App\Controller\GraphQL class
    $r->post('/graphql', [App\Controller\GraphQL::class, 'handle']);
});

// Dispatch the current request
$routeInfo = $dispatcher->dispatch(
    $_SERVER['REQUEST_METHOD'],
    $_SERVER['REQUEST_URI']
);

switch ($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        // 404 Not Found
        http_response_code(404);
        echo '404 Not Found';
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        // 405 Method Not Allowed
        $allowedMethods = $routeInfo[1];
        http_response_code(405);
        echo '405 Method Not Allowed';
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler = $routeInfo[1];  // The controller and method
        $vars = $routeInfo[2];     // The route variables

        // [$class, $method] should be invoked as [$instance, $method]
        [$class, $method] = $handler;
        $instance = new $class();  // Instantiate the controller class

        // Call the method on the class, passing the route variables
        echo call_user_func_array([$instance, $method], $vars);
        break;
}
