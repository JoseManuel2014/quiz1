var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);


router.get('/author', quizController.author);

module.exports = router;

/*
Modifique el router (routers/index.js) para que atienda las peticiones "GET /author" 
y sirva una nueva vista views/author.ejs con los datos de los autores o autor de la página, 
mostrando el nombre de los autores, su fotografía y un pequeño video (opcional) de 30 seg.


router.get('/autor', function(req, res) {
  res.render('/autor', /views/author.ejs);
});
*/

//render('/autor', /views/author.ejs);

router.get('/author', quizController.author);

module.exports = router;