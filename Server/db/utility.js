var bcrypt = require('bcrypt');

module.exports {
  //creates hashed password
  hashPass: function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
  },
  //compares hashed password for validity
  validatePass: function(entry, password) {
    return bcrypt.compareSync(entry, password);
  }
}