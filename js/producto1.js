
const getResponse = function (response){
 return response.json();
};


const producto = document.querySelector('.producto');
console.log(producto);

const mostrarProducto = function (data){
  let infoProducto =`
 <div class="col-12 col-sm-6 col-lg-3 my-2">
   <div class="card h-100">
     <img src= "${data.pictures[0].url}" class="card-img-top">
     <div class="border-top" class="card-body">
      <h2 class="card-text">$${data.price}</h2>
      <p id="cuotas" class="card-title one-line-title">6x $ ${(data.price/6).toFixed(2)} sin interés</p>
      <p id="titulo" class="card-title one-line-title">${data.title}</p>
     </div>
   </div>
 </div>
`;
  producto.insertAdjacentHTML('beforeend', infoProducto);
}




let endPoint =  `https://api.mercadolibre.com/items/MLA901055568`;




fetch(endPoint, {
   headers: {
      'Authorization': 'Bearer 60f0a01f98c1d300076c1a9b-124941375'
   }
})
 .then(getResponse)
 .then(mostrarProducto)
