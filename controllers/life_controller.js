const Life = require('../models/life');

module.exports.create = function(req, res){
    return res.render('create-page');
}


module.exports.prev = async function(req, res){
    let values = await Life.findOne({user: req.user});
    values = values.values;
    let index = parseInt(req.params.index) - 1;
    return res.render('home', {
		values: values[index],
        index: index,
        length : values.length
    })
}


module.exports.next = async function(req, res){
    let values = await Life.findOne({user: req.user});
    values = values.values;
    let index = parseInt(req.params.index) + 1;
    return res.render('home', {
		values: values[index],
        index: index,
        length : values.length
    })
}

