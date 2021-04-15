var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');
var UserInfo = require('../models/userinfo');

var async = require('async');

exports.index = function(req, res) {   
    //res.render('index', { title: 'Local Library Home', error: err, data: results });
    res.render('index');
};

// Display list of all Books.
//exports.book_list = function(req, res, next) {
//
//  Book.find({}, 'title author')
//    .populate('author')
//    .exec(function (err, list_books) {
//      if (err) { return next(err); }
//      //Successful, so render
//      res.render('book_list', { title: 'Book List', book_list: list_books });
//    });
//    
//};



// Handle book create on POST.
exports.login_create_post = function(req, res) {
    //Store req user name and password
    var username = req.body.username;
    var password = req.body.password;
    //Search for a user with this user name and password
    UserInfo.findOne({username: username, password: password}, function(err,user) {
        console.log(user);
        if(err){
            console.log(err);
            return res.send("There was an error");
        }       
        //if a user is not found send message
        if(!user){
            return res.send("User not found");
        }
        
        user.populate('following').execPopulate();
        //console.log(user.following);
        
        //else we have successfully found a user

        req.session.user = user;
        req.session.user.id = user._id;
           
         //console.log(req.session.user.following);
        res.redirect('/catalog/profile');
        //res.send("Successful login");
          
    })   
};

//// Display book delete form on GET.
//exports.book_delete_get = function(req, res) {
//    res.send('NOT IMPLEMENTED: Book delete GET');
//};
//
//// Handle book delete on POST.
//exports.book_delete_post = function(req, res) {
//    res.send('NOT IMPLEMENTED: Book delete POST');
//};
//
//// Display book update form on GET.
//exports.book_update_get = function(req, res) {
//    res.send('NOT IMPLEMENTED: Book update GET');
//};
//
//// Handle book update on POST.
//exports.book_update_post = function(req, res) {
//    res.send('NOT IMPLEMENTED: Book update POST');
//};