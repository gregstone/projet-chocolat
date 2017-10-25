var express = require('express');
var router = express.Router();

//connexion mysql (var connection)

/**
var connection = mysql.createConnection({
  host     : 'localhost',
	user     : 'root',
	password : 'root',
	database : 'groupe1'
});
**/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const products = [
{id:1,titre:"produit 1", description: "description de produit1", prix:2},
{id:2,titre:"produit 2", description: "description de produit2", prix: 3},
{id:3,titre:"produit 3", description: "description de produit3", prix: 30000}];

router.get('/produit-:productID(\\d+)', function(req, res, next){
	//connection.query('select * from products where id = ?', [req.params.productID],function(error, results){
		res.render('produit', {
			informations: products[req.params.productID]
		});
	//})
	
});

router.get('/admin/produits', function(req, res, next){
	res.render('admin-produit',{
			informations: products
		});
});


router.get('/produits', function(req, res, next){
	//connection.query('select * from products',function(error, results){
		// results = [ {titre: '', description: '', prix:''},{titre: '', description: '', prix:''} ]
		res.render('produit', {
			informations: products
		});
	//})
});

router.get('/admin/ajout-produit',function(req, res, next){
	res.render('ajout-produit');
});

router.post('/admin/ajout-produit', function(req, res, next){

});

router.get('/admin/edit-produit', function(req, res, next){
	res.render('edit-produit');
});



module.exports = router;
