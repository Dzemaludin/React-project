// 1.Yöntem => React - CDN (eksik araçlar)
// 2.Yöntem => create-react-app
var root = ReactDOM.createRoot(document.getElementById("root"));

let products = [
  {
    name: "Nesto 15",
    price: 4000,
  },
  {
    name: "Nesto 16",
    price: 6000,
  },
  {
    name: "Nesto 17",
    price: 7000,
  },
  {
    name: "Nesto 18",
    price: 9000,
  },
];

// react cdn => projekat koji postoji => (webpack + live-server)
// create-react-app

let selectedProducts = [];

function selectProducts(event, p_name) {
  console.log(event.target, p_name);
  if (!selectedProducts.includes(p_name)) {
    selectedProducts.push(p_name);
  }
  renderApp();
}


function saveProduct(event) {
  event.preventDefault();
  
  // console.log(event.target.elements.p_name.value);
  // console.log(event.target.elements.p_price.value);
  
  let p_name = event.target.elements.p_name.value;
  let p_price = event.target.elements.p_price.value;
  let product = {
    name: p_name,
    price: p_price,
  };
  products.push(product);
  event.target.elements.p_name.value = "";
  event.target.elements.p_price.value = "";
  
  

  renderApp();
} 

class Header extends React.Component{
  render(){
    return(
          <div>
             <h1 id="header">Lista Proizvoda</h1>
             <h3>Izabrani proizvodi: {selectedProducts.length} </h3>
          </div>
    )
  }
}

class NewProduct extends React.Component{
  render(){
    return(
      <form onSubmit={saveProduct}>
           <input type="text" name="p_name" id="p_name" />
           <input type="text" name="p_price" id="p_price" />
           <button type="submit"> Dodaj Proizvod</button>
    </form>
    )
  }
}

class ProductList extends React.Component{
  render(){
    return(
       this.props.products.map((product, index) => (
        <Product product={product} key={index} />
      ))
    )
  }
}

class Product extends React.Component{
  render(){
    return(
      <div id="product-details">
          {<h2> {this.props.product.name} </h2>}
          {this.props.product.price}
          <button
            type="button"
            onClick={(event) => selectProducts(event, this.props.product.name)}
          >{" "} ADD {" "}
          </button>
        </div>
    )
  }
}

class App extends React.Component{
  render(){
    return(
      <div>
          <Header/>
          <NewProduct/>
          <ProductList products={products}/>
    </div>
    )
  }
}


root.render(<App/>);
