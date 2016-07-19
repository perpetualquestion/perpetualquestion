var LocalStrategy = require('passport-local').Strategy;

var User = require('./db/userModel');


module.exports = function (passport) {
  //serialize user
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  //deserialize user
  passport.deserializeUser(function(id, done) {
    User.find(id, function(err, user) {    //double-check sql find function
      done(err, user);
    });            
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, username, password, done) {
    process.nextTick(function() {
      User.find({'username': username}, function(err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That username already exists.'));
        } else {
          var newUser = new User();
          newUser.username = username;
          newUser.password = password;

          newUser.save(function(err) {
            if (err) {
              throw err;
            }
            return done(null, newUser);
          });
        }
      });
    });
  }
  ));
};