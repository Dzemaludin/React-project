"use strict";

// 1.Yöntem => React - CDN (eksik araçlar)
// 2.Yöntem => create-react-app

var products = [{
  name: "Ipone 15",
  price: 4000,
  description: "good phone",
  colors: ["silver", "red", "white", "black"]
}, {
  name: "Ipone 16",
  price: 6000,
  description: "good phone",
  colors: ["silver", "red", "white", "black"]
}, {
  name: "Ipone 17",
  price: 7000,
  description: "good phone",
  colors: ["silver", "red", "black"]
}];
function formatPrice(product) {
  return /*#__PURE__*/React.createElement("p", null, product.price, " TL");
}
function printDescription(product) {
  if (product.description) {
    return /*#__PURE__*/React.createElement("p", null, product.description);
  }
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "Lista Proizvoda"), products.map(function (product, index) {
  return /*#__PURE__*/React.createElement("div", {
    id: "product-details",
    key: index
  }, product.name && product.name.length > 3 ? /*#__PURE__*/React.createElement("h2", null, " ", product.name, " ") : /*#__PURE__*/React.createElement("p", null, "The product name has not been entered."), product.price && product.price > 20 && formatPrice(product), product.description && /*#__PURE__*/React.createElement("p", null, " ", product.description, " "), product.colors.length > 1 ? /*#__PURE__*/React.createElement("p", null, " you can chose the color") : "", /*#__PURE__*/React.createElement("ul", null, product.colors.map(function (color, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, "  ", color, " ");
  })));
}));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
