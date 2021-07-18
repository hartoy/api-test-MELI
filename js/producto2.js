const getResponse2 = function (response){
 return response.json();
};


const producto2 = document.querySelector('.producto2');


const mostrarProducto2 = function (data){
  console.log(data.pictures[0]);
  let infoProducto2 =`
 <div class="col-12 col-sm-6 col-lg-3 my-2">
   <div class="card h-100">
     <img src= "${data.pictures[0].url}" class="card-img-top">
     <div class="border-top" class="card-body">
      <i class="fas fa-truck"></i>
      <p id="precioriginal" class="card-text">$${data.original_price}</p>

      <h3 class="card-text d-inline-block">$${data.base_price}</h3>
      <p id="descuento" class="card-text d-inline-block">20% OFF</p>
     
      <p id="titulo" class="card-title one-line-title">${data.title}</p>
     </div>
   </div>
 </div>
`;
  producto2.insertAdjacentHTML('beforeend', infoProducto2);
}




let endPoint2 =  `https://api.mercadolibre.com/items/MLA646715969`;




fetch(endPoint2, {
   headers: {
      'Authorization': 'Bearer 60f0a01f98c1d300076c1a9b-124941375'
   }
})
 .then(getResponse2)
 .then(mostrarProducto2)
