"use strict";

// 1.Yöntem => React - CDN (eksik araçlar)
// 2.Yöntem => create-react-app
var root = ReactDOM.createRoot(document.getElementById("root"));
var products = [{
  name: "Ipone 15",
  price: 4000
}, {
  name: "Ipone 16",
  price: 6000
}, {
  name: "Ipone 17",
  price: 7000
}];
var selectedProducts = [];
function addProduct(event, p_name) {
  console.log(event.target, p_name);
  if (!selectedProducts.includes(p_name)) {
    selectedProducts.push(p_name);
  }
  renderApp();
}
function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "header"
  }, "Lista Proizvoda"), /*#__PURE__*/React.createElement("h3", null, "Izabrani proizvodi: ", selectedProducts.length, " "), products.map(function (product, index) {
    return /*#__PURE__*/React.createElement("div", {
      id: "product-details",
      key: index
    }, /*#__PURE__*/React.createElement("h2", null, " ", product.name, " "), product.price, /*#__PURE__*/React.createElement("button", {
      type: "button",
      id: index,
      onClick: function onClick(event) {
        return addProduct(event, product.name);
      }
    }, " ADD  "));
  }));
  root.render(template);
}
renderApp();
