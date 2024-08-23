# Use the official PHP image from the Docker Hub
FROM php:8.1-cli

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    git \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set the working directory
WORKDIR /var/www/html

# Copy the application files
COPY . /var/www/html

# Install PHP dependencies
RUN composer install

# Expose port 9000
EXPOSE 9000

# Command to run PHP built-in server
CMD ["php", "-S", "0.0.0.0:9000", "-t", "public"]
