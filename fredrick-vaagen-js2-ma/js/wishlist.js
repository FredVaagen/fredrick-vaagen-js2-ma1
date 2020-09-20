import { getExisitingFavs} from "./utils/favFunctions.js";

const favourites = getExisitingFavs(); 

const productContainer = document.querySelector(".products-container"); 

if(favourites.length === 0) {
    productContainer.innerHTML = "No favourites yet";
}

favourites.forEach((favourite) => {
   
    productContainer.innerHTML += `<div class="product product__wishlist">
                                        <h4>${favourite.name}</h4>
                                        <p class="product__price">$${favourite.price}</p>
                                        <i class="fa fa-heart"></i>
                                     </div>`
                                   
                                  
});







