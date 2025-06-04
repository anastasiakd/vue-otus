const getProducts = () => (
    fetch('https://fakestoreapi.com/products', {method: 'GET'})
        .then(response => response.json())
);

export default {
    getProducts,
};
