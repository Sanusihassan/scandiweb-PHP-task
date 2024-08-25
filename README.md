# Setup
```bash
composer require vlucas/phpdotenv
```


### Start Command Of The Backend
```bash
docker run -d \
  --name php-container \
  -p 9000:9000 \
  -v $(pwd):/var/www/html \
  php-backend
```

