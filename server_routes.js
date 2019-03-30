var express = require('express');
module.exports = function (app) {
	
	var customers = require('./server/controllers/customers_controller');
	var products = require('./server/controllers/products_controller');
	var orders = require('./server/controllers/orders_controller');
	var auth = require('./server/controllers/auth_controller');


	app.use('/static', express.static('./web/static'));
	app.use('/images', express.static('/web/static/images'));
	app.use('/lib', express.static('../web/lib'));

	/*api auth calls*/
	app.post('/user/signin', auth.loginUser);
	app.post('/user/signup', auth.signupUser);
	
	/*api ecomm calls*/
	app.get('/products/get', products.getProducts);
	app.get('/orders/get', orders.getOrders);
	app.post('/orders/add', orders.addOrder);
	app.get('/customers/get', customers.getCustomer);
	app.post('/customers/update/shipping', customers.updateShipping);
	app.post('/customers/update/billing', customers.updateBilling);
	app.post('/customers/update/cart', customers.updateCart);
}