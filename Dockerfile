# Use the official PHP 8.1 image as the base image
FROM php:8.1-fpm

# Install necessary PHP extensions
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    && docker-php-ext-install zip pdo pdo_mysql

# Set the working directory
WORKDIR /var/www/html

# Copy the backend code to the container
COPY backend/ /var/www/html

# Expose port 9000 for PHP-FPM
EXPOSE 9000

# Command to run PHP-FPM
CMD ["php-fpm"]
