const jwt = require('jsonwebtoken');
const { SECRET_KEY, PATH_WHITELIST } = require('../../constants');

module.exports = (req, res, next) => {
  if (PATH_WHITELIST.includes(req.path))
    return next();
  const authHeader = req.header('Authorization');
  const errorMessage = 'Wrong authentication schema!';

  if (authHeader !== undefined) {
    const tokenString = req.header('Authorization');
    const [type, token] = tokenString.split(' ');
    
    if (type !== 'Bearer') {
      res.status(401).send(errorMessage);
    } else {
      try {
        const res = jwt.verify(token, SECRET_KEY);
      } catch (e) {
        res.status(401).send(errorMessage);
      }
      return next();
    }
  }

  res.status(401).send(errorMessage);
};