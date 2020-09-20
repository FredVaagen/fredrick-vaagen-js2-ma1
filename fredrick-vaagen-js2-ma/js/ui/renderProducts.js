import { EMPTY_FILTER_RESULTS } from "../constants/messages.js";
import { displayMessage }  from './displayMessage.js';
import { getExisitingFavs} from "../utils/favFunctions.js" ;

const favourites = getExisitingFavs(); 

const productsContainer = document.querySelector(".products-container");

export function renderProducts(productsToRender) {
    productsContainer.innerHTML = "";

    if ( productsToRender.length == 0) {
        displayMessage("", EMPTY_FILTER_RESULTS);
    }

    productsToRender.forEach(function(product) {
        let cssClass = "far"

        const doesObjectExist = favourites.find(function(fav) {
            return parseInt(fav.id) === product.id;
        });

        if(doesObjectExist) {
            cssClass="fa";
        }

        productsContainer.innerHTML += `<div class="product">
                                        <h4>${product.name}</h4>
                                        <p class="product__price">$${product.price}</p>
                                        <i class= "${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" ></i>
                                        
                                    </div>`;
    }); 

    const favButtons = document.querySelectorAll(".product i");

    favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    function handleClick(){
       
       this.classList.toggle("fa")
       this.classList.toggle("far")

       const id = this.dataset.id;
       const name = this.dataset.name;
       const price = this.dataset.price

       const currentFavs = getExisitingFavs();


        const productInfoExist = currentFavs.find(function(fav) {
            return fav.id === id; 
        });

        if(productInfoExist === undefined) {
            const productInfo = { id: id, name: name, price: price};
            currentFavs.push(productInfo);
            saveFavs(currentFavs);   
        } else {
            const newFavs = currentFavs.filter((fav) => fav.id !== id);
            saveFavs(newFavs);
        }
        
    }

    function saveFavs(favs) {
        localStorage.setItem("favourites", JSON.stringify(favs));
    }

    
}   
