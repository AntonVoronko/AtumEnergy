var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'vavava1',
    database: 'atum_energy',
    port: 3306
  }
);

module.exports = {
  getProducts: function (callback) {
	connection.query('SELECT * FROM products;', function (err, rows) {
	  if (!err) {
	    callback(null, { products: rows });
	  }
	  else {
	    callback(err);
	  	console.log('error');
	    console.log(err);
	  }
	})
  },
  addProduct: function (product, callback) {
	connection.query('INSERT INTO products(' + [
		'name', 
		'type', 
		'subtype', 
		'description', 
		'img', 
		'price', 
		'meta_key', 
		'meta_description'
	].join(', ') + ') VALUES (' + [
		product.name, 
		product.type, 
		product.subtype, 
		product.description, 
		product.img, 
		product.price, 
		product.meta_key, 
		product.meta_description
	].join(', ') + ');', function (err, rows) {
	  if (!err) {
	    callback(null, { product: rows });
	  }
	  else {
	    callback(err);
	    console.log(err);
	  }
	});
  },
  updateProduct: function (id, product, callback) {
  	connection.query('UPDATE products SET ' + [
  		'name = "' + product.name, 
  		'type = "' + product.type, 
  		'subtype = "' + product.subtype, 
  		'description = "' + product.description, 
  		'img = "' + product.img, 
  		'meta_key = "' + product.meta_key,
  		'meta_description = "' + product.meta_description
  	].join(', ') + '" price = ' + product.price + ' WHERE id =' + id + ';', function (err, row) {
	  if (!err) {
	    callback(null, { product: rows });
	  }
	  else {
	    callback(err);
	    console.log(err);
	  }
	});
  },
  deleteProduct: function (id, callback) {
  	connection.query('DELETE FROM  products WHERE id =' + id + ';', function (err, rows) {
	  if (!err) {
	    callback(null, { product: rows });
	  }
	  else {
	    callback(err);
	    console.log(err);
	  }
	});
  }

};