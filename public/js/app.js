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

  var p_name = event.target.elements.p_name.value;
  var p_price = event.target.elements.p_price.value;
  var product = {
    name: p_name,
    price: p_price
  };
  products.push(product);
  event.target.elements.p_name.value = "";
  event.target.elements.p_price.value = "";
  renderApp();
}
function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "header"
  }, "Lista Proizvoda"), /*#__PURE__*/React.createElement("h3", null, "Izabrani proizvodi: ", selectedProducts.length, " "), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveProduct
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "p_name",
    id: "p_name"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "p_price",
    id: "p_price"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, " Dodaj Proizvod")), products.map(function (product, index) {
    return /*#__PURE__*/React.createElement("div", {
      id: "product-details",
      key: index
    }, /*#__PURE__*/React.createElement("h2", null, " ", product.name, " "), product.price, /*#__PURE__*/React.createElement("button", {
      type: "button",
      id: index,
      onClick: function onClick(event) {
        return selectProducts(event, product.name);
      }
    }, " ADD  "));
  }));
  root.render(template);
}
renderApp();
