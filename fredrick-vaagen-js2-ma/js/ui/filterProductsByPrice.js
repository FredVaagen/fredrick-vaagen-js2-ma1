import { renderProducts } from "./renderProducts.js";

export function filterProductsByPrice(productsPrice) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        
        const searchValue = event.target.value;

        const filteredProducts = productsPrice.filter(function(product) {
            const parsedPrice = parseFloat(product.price)
            if ( parsedPrice <= searchValue) {
                return true;

            } else if (searchValue == "") {
                return true;
            }
        });

        renderProducts(filteredProducts);
    };
    
}



