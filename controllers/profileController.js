var Pitch = require('../models/pitch');
var PlayerStats = require('../models/playerstats');
var async = require('async');

// Display detail page for a specific Author.
exports.profile_index = async function(req, res) {
    var fastballArray = [];
    var curveballArray = [];
    //res.render('profile');
    //res.render('bootstrap');
        //This method is intended to show all posts of logged in users' friends
    //Pitch.find({user: {"$in": req.session.user.friends}})
    console.log("FROM THE PROF" + req.session.user.name);
    //Pitch.find()
    
//    Pitch.find({user: req.session.user})
//    .exec(function (err, list_pitches) {
//      if (err) { return next(err); }
//      //Successful, so render
//        console.log("FIND FUNCTION WORKED");
//        //console.log(list_pitches);
//        list_pitches.forEach(function(entry){ 
//            if(entry.pitch_type == "Fastball")
//                fastballArray.push(entry);
//            else if(entry.pitch_type == "Curveball")
//                curveballArray.push(entry);
//        });
//        res.render('profile', { title: 'Pitching Guru Profile Page', fastball_list: fastballArray, curveball_list: curveballArray, name: req.session.user.name});
//    });
    var stats_array;
      await PlayerStats.find(function(err,stat){
          stats_array=stat;
          console.log("We found " + stats_array);
        });
    
        Pitch.find({user: req.session.user})
    .exec(function (err, list_pitches) {
      if (err) { return next(err); }
      //Successful, so render
        console.log("FIND FUNCTION WORKED");
        //console.log(list_pitches);
        list_pitches.forEach(function(entry){ 
            if(entry.pitch_type == "Fastball")
                fastballArray.push(entry);
            else if(entry.pitch_type == "Curveball")
                curveballArray.push(entry);
        });
        res.render('profile', { title: 'Pitching Guru Profile Page', fastball_list: fastballArray, curveball_list: curveballArray, stats_list: stats_array, name: req.session.user.name});
    });
    
    
};



//exports.datainput_create_post = function(req, res) {
//   
//};
