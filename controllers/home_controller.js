const Life = require('../models/life');

module.exports.home = async function(req, res){
	let values = await Life.findOne({user: req.user});
	if(values == undefined){
		return res.redirect('/life/create')
	}
	values = values.values;
    return res.render('home', {
		values: values[0],
		index: 0,
		length : values.length
    })
}