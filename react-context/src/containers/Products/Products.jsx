import ProductsList from "../../components/ProductsList";

const Products = () => {
    const products = [
        { name: "shoes", description: "for feet" },
        { name: "hat", description: "for head" },
        { name: "socks", description: "for feet" },
    ];

    return <ProductsList products={products} />;
};

export default Products;
