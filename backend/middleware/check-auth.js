const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // pull token from headers['authorization'], that has keyword "Bearer in_here_the_token"
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secret_this_should_be_longer");
    next();
  } catch (error) {
    res.status(401).json({message: "Auth failed!"});
  }
};
