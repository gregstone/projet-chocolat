var express = require('express');
var router = express.Router();

// GET /admin/login
router.get('/login', function(req, res){
	// page de login (formulaire)
});

// GET /admin/login
router.post('/login', function(req, res){
	// page de login 
	// puis
	// redirection vers /produits
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