"use strict";

// 1.Yöntem => React - CDN (eksik araçlar)
// 2.Yöntem => create-react-app

var product = {
  name: "Ipone 15",
  price: 4000,
  description: "good phone",
  colors: ["silver", "red", "white"]
};
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
}, "Lista Proizvoda"), /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, product.name && product.name.length > 3 ? /*#__PURE__*/React.createElement("h2", null, " ", product.name, " ") : /*#__PURE__*/React.createElement("p", null, "The product name has not been entered."), product.price && product.price > 20 && formatPrice(product), product.description && /*#__PURE__*/React.createElement("p", null, " ", product.description, " "), product.colors.length > 1 ? /*#__PURE__*/React.createElement("p", null, " you can chose the color") : "", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."))));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
