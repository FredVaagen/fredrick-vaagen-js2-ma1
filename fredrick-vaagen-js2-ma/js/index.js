import { url } from "./constants/settings.js";
import { renderProducts } from "./ui/renderProducts.js";
import { filterProductsByPrice } from "./ui/filterProductsByPrice.js";
import { displayMessage } from "./ui/displayMessage.js";

async function getProducts() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json.data);

        const products = json.data;

        renderProducts(products);
        filterProductsByPrice(products);
       
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".products-container");
    }
}

getProducts();
