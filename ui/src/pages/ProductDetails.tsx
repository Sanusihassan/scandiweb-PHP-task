import { Component } from 'react';

interface ProductDetailsProps {
    // Define your prop types here if needed
}

interface ProductDetailsState {
    selectedSize: string | null;
    selectedColor: string | null;
    images: string[];
    currentImageIndex: number;
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {
    constructor(props: ProductDetailsProps) {
        super(props);
        this.state = {
            selectedSize: null,
            selectedColor: null,
            images: [
                // Array of image URLs
            ],
            currentImageIndex: 0,
        };
    }

    handleSizeSelection = (size: string) => {
        this.setState({ selectedSize: size });
    };

    handleColorSelection = (color: string) => {
        this.setState({ selectedColor: color });
    };

    handleImageChange = (index: number) => {
        this.setState({ currentImageIndex: index });
    };

    handleAddToCart = () => {
        if (this.isAddToCartEnabled()) {
            // Logic to add product to cart
        }
    };

    isAddToCartEnabled = () => {
        const { selectedSize, selectedColor } = this.state;
        return selectedSize !== null && selectedColor !== null;
    };

    render() {
        const { selectedSize, selectedColor, images, currentImageIndex } = this.state;
        const currentImage = images[currentImageIndex];

        return (
            <div className="product-details">
                <h1 className="product-name">Product Name</h1>

                <div className="product-attributes">
                    <div className="product-attribute" data-testid="product-attribute-size">
                        <label>Size:</label>
                        <div className="size-swatch">
                            {/* Example sizes, these would be generated dynamically */}
                            <button
                                className={`swatch-button ${selectedSize === 'S' ? 'selected' : ''}`}
                                onClick={() => this.handleSizeSelection('S')}
                            >
                                S
                            </button>
                            <button
                                className={`swatch-button ${selectedSize === 'M' ? 'selected' : ''}`}
                                onClick={() => this.handleSizeSelection('M')}
                            >
                                M
                            </button>
                            <button
                                className={`swatch-button ${selectedSize === 'L' ? 'selected' : ''}`}
                                onClick={() => this.handleSizeSelection('L')}
                            >
                                L
                            </button>
                        </div>
                    </div>

                    <div className="product-attribute" data-testid="product-attribute-color">
                        <label>Color:</label>
                        <div className="color-swatch">
                            {/* Example colors, these would be generated dynamically */}
                            <button
                                className={`swatch-button color-red ${selectedColor === 'red' ? 'selected' : ''}`}
                                onClick={() => this.handleColorSelection('red')}
                            ></button>
                            <button
                                className={`swatch-button color-blue ${selectedColor === 'blue' ? 'selected' : ''}`}
                                onClick={() => this.handleColorSelection('blue')}
                            ></button>
                            <button
                                className={`swatch-button color-green ${selectedColor === 'green' ? 'selected' : ''}`}
                                onClick={() => this.handleColorSelection('green')}
                            ></button>
                        </div>
                    </div>
                </div>

                <div className="product-price">Price: $99.99</div>

                <div className="product-gallery" data-testid="product-gallery">
                    <div className="image-carousel">
                        <button
                            className="carousel-arrow carousel-arrow-left"
                            onClick={() => this.handleImageChange(currentImageIndex - 1)}
                            disabled={currentImageIndex === 0}
                        >
                            &lt;
                        </button>
                        <img className="main-image" src={currentImage} alt="Product" />
                        <button
                            className="carousel-arrow carousel-arrow-right"
                            onClick={() => this.handleImageChange(currentImageIndex + 1)}
                            disabled={currentImageIndex === images.length - 1}
                        >
                            &gt;
                        </button>
                    </div>
                    <div className="thumbnail-images">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                className={`thumbnail-image ${currentImageIndex === index ? 'selected' : ''}`}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => this.handleImageChange(index)}
                            />
                        ))}
                    </div>
                </div>

                <button
                    className={`add-to-cart ${this.isAddToCartEnabled() ? '' : 'disabled'}`}
                    onClick={this.handleAddToCart}
                    data-testid="add-to-cart"
                    disabled={!this.isAddToCartEnabled()}
                >
                    Add to Cart
                </button>

                <div className="product-description" data-testid="product-description">
                    <p>This is the product description with HTML content.</p>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
