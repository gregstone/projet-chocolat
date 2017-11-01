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


// permet le fonctionnement de l'envoi de mails
const nodemailer = require("nodemailer");
var path = require('path');


/* GET home page. */

router.get('/', function(req, res, next) {
  
  res.render('index');
});



router.get('/juridique', function (req, res) {
	res.render('juridique.pug');
})

router.get('/contact', function (req, res) {
	res.render('contact.pug');
})








// Configuration de l'envoi de mail 


router.get('/contact', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/', 'contact.pug'));
 
});




router.post('/contact', function(req, res, next) {

	// Configuration du SMTP avec Mailtrap   
	var transport = nodemailer.createTransport({
	  host: "smtp.mailtrap.io",
	  port: 2525,
	  auth: {
	    user: "69f91feb50f9b3",
	    pass: "166ba62f4fd166"
	  }
	});

	// Caracteristiques du message à envoyer 
	console.log(req.body);
	transport.sendMail({
	    from: "f4456f26df-5118cc@inbox.mailtrap.io", // Expediteur --> ici adresse fournit par mailtrap 
	    to: "f4456f26df-5118cc@inbox.mailtrap.io", // Destinataires
	    subject: req.body.subject, // Objet du mail 
	    text: 'Bonjour Mr Ducerf ' + req.body.name + ' ' + req.body.surname + ' visiteur de chocolat en joie.com viens de vous envoyer un nouveau formulaire de contact: ' + '\n' + '\n' 
	    		+' prenom: ' + req.body.name+ ' ' + '\n'
	    		+' nom: '+req.body.surname+' ' + '\n'
	    		+' email: '+req.body.email+' ' + '\n'
	    		+' phone: '+req.body.phone+' ' + '\n'
	    		+' adress: '+req.body.adress+' ' + '\n'
	    		+' zip: '+req.body.zip+' ' + '\n'
	    		+' city: '+req.body.city+' ' + '\n'
	    		+' subject: '+req.body.subject+' ' + '\n'
	    		+' message: '+req.body.message+' '		
	       	
	}, 

	(error, response) => {
	    if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent");
	        res.redirect('/contact');
	       
	    }
	});
  

});

// GET page produits
 router.get('/produits', function(req, res, next){
		res.render('produit');
});


module.exports = router;
