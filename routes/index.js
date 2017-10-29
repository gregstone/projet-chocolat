var express = require('express');
var router = express.Router();

// permet le fonctionnement de l'envoi de mails
const nodemailer = require("nodemailer");
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Configuration de l'envoi de mail 


router.get('/contact', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/', 'contact.html'));
 
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
	    text: 	'prenom: ' + req.body.name+ ' ' 
	    		+' nom: '+req.body.surname+' '
	    		+' email: '+req.body.email+' '
	    		+' phone: '+req.body.phone+' '
	    		+' adress: '+req.body.adress+' '
	    		+' zip: '+req.body.zip+' '
	    		+' city: '+req.body.city+' '
	    		+' subject: '+req.body.subject+' '
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





module.exports = router;
