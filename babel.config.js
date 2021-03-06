module.exports = {
  "presets": [
    [
      "@babel/env", {
      "loose"  : true,
      "modules": false,
      "exclude": ["transform-typeof-symbol"]
    }
    ]
  ],
  "plugins": [
    "@babel/plugin-proposal-object-rest-spread",
    [
      "module-resolver", {
      "alias": [{ "src": "./node_modules/bootstrap", "expose": "bootstrap" }]
    }
    ]
  ]
};
