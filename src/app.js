// 1.Yöntem => React - CDN (eksik araçlar)
// 2.Yöntem => create-react-app

let product = {
  name: "Ipone 15",
  price: 4000,
  description: "good phone",
  colors:["silver","red","white"]
};
function formatPrice(product) {
  return <p>{product.price} TL</p>;
}
function printDescription(product) {
  if (product.description) {
    return <p>{ product.description}</p>;
  }
}

let template = (
  <div>
    <h1 id="header">Lista Proizvoda</h1>
    <div id="product-details">
      {(product.name && product.name.length > 3) ?<h2> {product.name} </h2>: <p>The product name has not been entered.</p>}
      { (product.price && product.price > 20 ) && formatPrice(product)}
      {/* {printDescription(product)} */}
      {product.description && <p> {product.description} </p>}
      {product.colors.length > 1 ? <p> you can chose the color</p>:""}
      <ul>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
      </ul>
    </div>
  </div>
);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
