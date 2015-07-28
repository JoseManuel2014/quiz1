//GET /author
exports.author = function(req, res){
	res.render('author', {autor: 'José Manuel Barrios'})
}

//GEt /quizes/question
exports.question = function(req,res) {
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

//GEt /quizes/answer
exports.answer = function(req,res) {
	if (req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcto'});
	} else {
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};
