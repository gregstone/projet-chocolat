var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const config = require('../config.js');
const connection = mysql.createConnection(config);
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'tmp/' });


connection.connect();

// GET /admin
router.get('/', function(req, res) {
    // page de login (formulaire)
    res.render('login');
});


// POST /admin/login
router.post('/', function(req, res) {

    // page de login 
    // puis
    // redirection vers /admin/logged (page d'accueil de l'espace admin)
    let login = req.body.login;
    let password = req.body.password;
    connection.query('SELECT * FROM admin  WHERE login = "' + login + '" AND password = "' + password + '";', function(error, results, fields) {
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
router.get('/logged', function(req, res) {

    if (req.session.connected) {
        res.render('admin');
    } else {
        res.redirect('/');
    }
});


// GET /SESSION OUVERTE
router.get('/login', function(req, res) {

});


// GET /admin/produits
router.get('/produits', function(req, res) {
    // liste des produits
});

// GET /admin/produits/ajouter
router.get('/produits/ajouter', function(req, res) {
    // ajouter des produits (formulaire)
});


// POST /admin/produits/ajouter
router.post('/produits/ajouter', function(req, res) {
    // ajouter des produits
    // puis
    // redirection vers /produits
});

// GET /admin/produits/modifier
router.get('/produits/modifier/:id(\\d+)', function(req, res) { // req.params.id 
    // modifier des produits (formulaire)
});

// POST /admin/produits/modifier
router.post('/produits/modifier/:id(\\d+)', function(req, res) {
    // modifier des produits
    // puis
    // redirection vers /produits
});

// GET /admin/produits/supprimer
router.get('/produits/supprimer/:id(\\d+)', function(req, res) {
    // supprimer des produits
    // puis
    // redirection vers /produits
});


// GET /admin/ateliers   // OK !!!!! Manque l'affichage de l'image dans la base ///
router.get('/ateliers', function(req, res) {
    connection.query('SELECT * FROM workshops', function(error, results, fields) {
        if (error) throw error;
        // connected!
        //res.render('admin-ateliers', results);

        res.render('admin-ateliers.pug', {
            results: results
        });
        console.log(results);
        // liste des ateliers
    });
});

// GET /admin/ateliers/modifier // OK //
router.get('/ateliers/modifier', function(req, res) {
    res.render('admin-ateliers-modifier.pug', {});
    //ajouter des ateliers (formulaire)
});


// POST /admin/ateliers/modifier

// modifier l'atelier en cours (formulaire) ps: on ne peut que modifier puisqu'il n'y en a qu'un à la fois
router.post('/ateliers/modifier', function(req, res) {

    //if(req.file){} // si req.file existe
    //if (req.file.size < (3*1024*1024) && (req.file.mimetype == 'image/png' || req.file.mimetype == 'image/jpg') ) {
    //fs.rename(req.file.path,'public/images/'+req.body.product_namereq.file.originalname);
    //} else {
    //res.send('Vous avez fait une erreur dans le téléchargement') }
	console.log(req.body);
    connection.query('UPDATE workshops SET name = ?, date = ? WHERE id=1', [req.body.name, req.body.date], function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        // connected!
        res.redirect('/admin/ateliers');
    });

});


// POST /admin/new-background
router.post('/new-background', upload.single('new-background'), function(req, res) {
	console.log(req.file);
fs.rename(req.file.path,'public/images/background3.png');
res.redirect('/admin/ateliers');
});


// POST /admin/new-background
router.post('/new-background', upload.single('new-background'), function(req, res) {
	console.log(req.file);
fs.rename(req.file.path,'public/images/background3.png');
res.redirect('/admin/ateliers');
});










// GET /admin/ateliers/modifier
router.get('/ateliers/modifier/:id(\\d+)', function(req, res) {
    // modifier des ateliers (formulaire)
});

// POST /admin/ateliers/modifier
router.post('/ateliers/modifier/:id(\\d+)', function(req, res) {
    // modifier des ateliers
    // puis
    // redirection vers /ateliers
});

// GET /admin/ateliers/supprimer
router.get('/ateliers/supprimer/:id(\\d+)', function(req, res) {
    // supprimer des ateliers
    // puis
    // redirection vers /ateliers
});

module.exports = router;