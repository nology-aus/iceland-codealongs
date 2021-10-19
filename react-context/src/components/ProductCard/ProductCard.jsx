const ProductCard = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductCard;
