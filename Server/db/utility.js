var bcrypt = require('bcrypt');

module.exports = {
  //creates hashed password
  hashPass: function(password) {
    return bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        return hash;
      });
    });
  },
  //compares hashed password for validity
  validatePass: function(entry, password) {
    //entry is their password attempt, password is the hash stored in db
    return bcrypt.compare(entry, password, function(err, result) {
      //result is true/false based on validity
      return result;
    });
  }
}