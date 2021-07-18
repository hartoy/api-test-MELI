const getResponse3 = function (response){
 return response.json();
};


const producto3 = document.querySelector('.producto3');


const mostrarProducto3 = function (data){
   let infoProducto3 =`
      <div class="col-12 col-sm-6 col-lg-3 my-2">
         <div class="card h-100">
            <img src= "${data.pictures[0].url}" class="card-img-top">
          <div class="border-top" class="card-body">
            <p id="colors" class="card-text">3 colores</p>
            <p id="bestseller" class="card-text">MAS VENDIDO</p>
            <p id="precioriginal" class="card-text">$${data.original_price}</p>

            <h3 class="card-text d-inline-block">$${data.base_price}</h3>
            <p id="descuento" class="card-text d-inline-block">21% OFF</p>

            ${
               data.shipping.free_shipping ?
               '<p id="freetoday" class="card-text">Llega gratis hoy</p>' :
               ''
            }
            <p id="titulo" class="card-title one-line-title">${data.title}</p>
         </div>
      </div>
   `;
   producto3.insertAdjacentHTML('beforeend', infoProducto3);
}




let endPoint3 =  `https://api.mercadolibre.com/items/MLA906258237`;




fetch(endPoint3, {
   headers: {
      'Authorization': 'Bearer 60f0a01f98c1d300076c1a9b-124941375'
   }
})
 .then(getResponse3)
 .then(mostrarProducto3)
