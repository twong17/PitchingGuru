var Author = require('../models/author');
var Pitch = require('../models/pitch');


// Display detail page for a specific Author.
exports.datainput_index = function(req, res) {
    res.render('inputdata2');
    //res.render('bootstrap');
};



exports.datainput_create_post = function(req, res) {
    var num = req.body.Test;
    console.log(num);
    console.log(typeof num);
    var obj = JSON.parse(num);
    console.log(typeof obj);
    console.log(obj);
    for (x in obj) {
      console.log(obj[x][0]);
    }
    //res.send(num);
    
    for (x in obj) {
        var pitch = new Pitch(
          { xCoordinate: obj[x][0],
            yCoordinate: obj[x][1],
            pitch_type: obj[x][2],
            pitch_velocity: obj[x][3],
            user: req.session.user
          }
        );
        
      pitch.save(function (err) {
               if (err) { return next(err); }
               // state that the user has been sucessfully created
               
                //req.session.newuser = userinfo;
                //res.redirect('/catalog/register/image');
                
             });  
        
    }
};
