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

function selectProducts(event, p_name) {
  console.log(event.target, p_name);
  if(!selectedProducts.includes(p_name)){
    selectedProducts.push(p_name);
  }
  renderApp()
}   

function saveProduct(event) {
  event.preventDefault();

  // console.log(event.target.elements.p_name.value);
  // console.log(event.target.elements.p_price.value);

  let p_name = event.target.elements.p_name.value
  let p_price = event.target.elements.p_price.value
  let product = {
    name: p_name,
    price: p_price
  }
  products.push(product)
  event.target.elements.p_name.value = ""
  event.target.elements.p_price.value = ""

  renderApp()   
 
}

function renderApp(){
  let template = (
    <div>
      <h1 id="header">Lista Proizvoda</h1>
      <h3>Izabrani proizvodi: {selectedProducts.length} </h3>
  
          <form onSubmit={saveProduct}>
            <input type="text" name="p_name" id="p_name" />
            <input type="text" name="p_price" id="p_price" />
            <button type="submit"> Dodaj Proizvod</button>
          </form>

      {
        products.map((product,index) => (
          <div id="product-details" key={index}>
          { <h2> {product.name} </h2>}
          { product.price }
          <button type="button" id={index} onClick={(event)=> selectProducts(event,product.name)}> ADD  </button>
          
       
        </div>
        ))
      }
   
    </div>
  );
  root.render(template);


}

renderApp()



