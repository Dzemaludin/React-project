// 1.Yöntem => React - CDN (eksik araçlar)
// 2.Yöntem => create-react-app
var root = ReactDOM.createRoot(document.getElementById("root"));


let products = [
{
  name: "Ipone 15",
  price: 4000
},
{
  name: "Ipone 16",
  price: 6000
},
{
  name: "Ipone 17",
  price: 7000
}
]

let selectedProducts = [];

function addProduct(event, p_name) {
  console.log(event.target, p_name);
  if(!selectedProducts.includes(p_name)){
    selectedProducts.push(p_name);
  }
  renderApp()
}

function renderApp(){
  let template = (
    <div>
      <h1 id="header">Lista Proizvoda</h1>
      <h3>Izabrani proizvodi: {selectedProducts.length} </h3>
  
      {
        products.map((product,index) => (
          <div id="product-details" key={index}>
          { <h2> {product.name} </h2>}
          { product.price }
          <button type="button" id={index} onClick={(event)=> addProduct(event,product.name)}> ADD  </button>
          
       
        </div>
        ))
      }
   
    </div>
  );
  root.render(template);


}

renderApp()



