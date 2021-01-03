const Life = require('../models/life');
const User = require('../models/user');

module.exports.save = function(req, res){
    let user = req.user;
    let text = req.body.text;
    let status = "/";
    let date = new Date().toString().substr(0, 10);
    User.findById({_id: user._id}, async function (err, output){
        if(err){
            return res.redirect('back');
        }
        if(output.life === undefined){
            let value = [{text: text, createdAt: date}];
            let life =  await Life.create({
                user: user._id,
                values: value
            })
            await User.findOneAndUpdate({_id: user._id}, {$set:{life: life}}, { useFindAndModify: false, new: true }, function(err, success){
                if(err){
                    status = "back";
                }
                else{
                    console.log('created');
                    return res.redirect('/')
                }
            })
        }else{
            let value = {text: text, createdAt: date};
                Life.findOneAndUpdate({user: user}, {$push:{values: value}}, {useFindAndModify: false, new: true }, function(err, success){
                    if(err){
                        status = "back";
                    }
                    else{
                        console.log('created');
                    }
                })
            } 
    });
    return res.redirect(status);
}

