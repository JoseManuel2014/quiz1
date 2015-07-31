var models = require('../models/models.js')

//GET /author
exports.author = function(req, res){
	res.render('author', {autor: 'José Manuel Barrios'})
}

//GET /quizes
exports.index = function(req,res) {
	models.Quiz.findAll().then(function(quizes) {
		res.render('quizes/index.ejs', { quizes: quizes});
	})
};

//GEt /quizes/:Id
exports.show = function(req,res) {
	models.Quiz.findById(req.params.quizId).then(function(quiz) {
		res.render('quizes/show', { quiz: quiz});
	})
};

//GEt /quizes/:Id/answer
exports.answer = function(req,res) {
	models.Quiz.findById(req.params.quizId).then(function(quiz) {
		if (req.query.respuesta === quiz.respuesta) {
			res.render('quizes/answer', {quiz:quiz, respuesta: 'Correcto'});
		} else {
			res.render('quizes/answer', {quiz:quiz, respuesta: 'Incorrecto'});
		}
	})
};