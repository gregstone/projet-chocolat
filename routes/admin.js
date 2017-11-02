var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'jecode4wcs',
	database : 'chocoenjoie'
});

connection.connect();

// GET /admin
router.get('/', function(req, res){
	// page de login (formulaire)
	res.render('login');
});


// POST /admin/login
router.post('/', function(req, res){

	// page de login 
	// puis
	// redirection vers /admin/logged (page d'accueil de l'espace admin)
	let login = req.body.login;
	let password= req.body.password;
	connection.query('SELECT * FROM admin  WHERE login = "' + login + '" AND password = "' + password + '";', function (error, results, fields) {
	  if (error) throw error;
	  
	  if (results.length === 0) {
	  	res.send("Cet utilisateur n'existe pas");
	  } else {
	  	req.session.connected = true;
	  	res.redirect('/admin/logged');
	  }
	});
});

// GET admin/logged
router.get('/logged', function(req, res){
	
	if (req.session.connected){
	 	res.render('admin');
	} else {
	 	res.redirect('/');
	}
});


// GET /SESSION OUVERTE
router.get('/login', function(req, res){
	
});





// GET /admin/produits
router.get('/produits', function(req, res){
	// liste des produits
});

// GET /admin/produits/ajouter
router.get('/produits/ajouter', function(req, res){
	// ajouter des produits (formulaire)
});


// POST /admin/produits/ajouter
router.post('/produits/ajouter', function(req, res){
	// ajouter des produits
	// puis
	// redirection vers /produits
});

// GET /admin/produits/modifier
router.get('/produits/modifier/:id(\\d+)', function(req, res){ // req.params.id 
	// modifier des produits (formulaire)
});

// POST /admin/produits/modifier
router.post('/produits/modifier/:id(\\d+)', function(req, res){
	// modifier des produits
	// puis
	// redirection vers /produits
});

// GET /admin/produits/supprimer
router.get('/produits/supprimer/:id(\\d+)', function(req, res){
	// supprimer des produits
	// puis
	// redirection vers /produits
});


// GET /admin/ateliers
router.get('/ateliers', function(req, res){
	// liste des ateliers
});

// GET /admin/ateliers/ajouter
router.get('/ateliers/ajouter', function(req, res){
	// ajouter des ateliers (formulaire)
});


// POST /admin/ateliers/ajouter
router.post('/ateliers/ajouter', function(req, res){
	// ajouter des ateliers
	// puis
	// redirection vers /ateliers
});

// GET /admin/ateliers/modifier
router.get('/ateliers/modifier/:id(\\d+)', function(req, res){
	// modifier des ateliers (formulaire)
});

// POST /admin/ateliers/modifier
router.post('/ateliers/modifier/:id(\\d+)', function(req, res){
	// modifier des ateliers
	// puis
	// redirection vers /ateliers
});

// GET /admin/ateliers/supprimer
router.get('/ateliers/supprimer/:id(\\d+)', function(req, res){
	// supprimer des ateliers
	// puis
	// redirection vers /ateliers
});

module.exports = router;