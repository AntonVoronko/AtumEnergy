var express = require('express');
var app = express();
var about = express.Router();
var products = require('./controllers/productController');

 app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', function (err, html) {
    res.send(html);
  });
});

app.route('/api/products')
  .get(function (req, res) {
    var result = products.getProducts(function (err, result) {
      res.json(result);
    });
  })
  .post(function (req, res) {
    var result = products.addProduct(req.query, function (err, result) {
      res.json(result);
    });
  });

app.route('/api/products/:id')
  .get(function (req, res) {
    var result = products.getSingleProduct(req.params.id, function (err, result) {
      res.json(result);
    });
  })
  .put(function (req, res) {
    var result = products.updateProduct(req.params.id, req.query, function (err, result) {
      res.json(result);
    });
  })
  .delete(function (req, res) {
    var result = products.deleteProduct(req.params.id, function (err, result) {
      res.json(result);
    })
  });


app.listen(3000);