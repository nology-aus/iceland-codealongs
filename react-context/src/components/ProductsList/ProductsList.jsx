import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const ProductsList = ({ products }) => {
    const { search } = useContext(SearchContext);

    const searchResults = products.filter((product) =>
        product.name.includes(search)
    );

    return (
        <>
            {searchResults.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}
        </>
    );
};

export default ProductsList;
