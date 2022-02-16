const jwt = require('../config/jwt');

exports.generateAccessToken = (user) => {
    const expiresIn = (user.firstName === "PDF" ? "10m" : "8h");
    
    return jwt.sign(user, "access_token", { expiresIn });
};
  
exports.generateRefreshToken = (user) => jwt.sign(user, "refresh_token");
  