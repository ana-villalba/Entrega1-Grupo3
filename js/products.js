let categoria = '101'

function showProductsList(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let product = array[i];
        htmlContentToAppend += `
        <div class="product-item container-fluid" >
            <div class="product-image col-lg-4">
                <img src=" `+ product.image +` " alt="product image" class="img-thumbnail">
            </div>
            <div class="product-details col-lg-7">
                <p class="product-name">`+ product.name + `<p>
                <p> ` + product.description + `</p>
                <p> Precio $: ` + product.cost + `</p>
                <p> Cantidad vendida: `+ product.soldCount + `</p>
            </div>
        </div>
        `;
    }

    document.getElementById("products-container").innerHTML = htmlContentToAppend;
}

function filterProducts(minPrice, maxPrice) {
    return productsArray.filter(product =>
        product.cost >= minPrice && product.cost <= maxPrice
    );
}

function sortProducts(array, sortBy) {
    return array.slice().sort((a, b) => {
        if (sortBy === 'price-asc') {
            return a.cost - b.cost;
        } else if (sortBy === 'price-desc') {
            return b.cost - a.cost;
        } else if (sortBy === 'relevance') {
            return b.soldCount - a.soldCount;
        }
        return 0;
    });
}


// Cargar los datos cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL + '/' + categoria + '.json').then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data.products;
            showProductsList(productsArray);
        }
    });
});



