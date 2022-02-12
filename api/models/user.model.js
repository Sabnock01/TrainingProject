const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { 
        underscored: true, 
        timestamps: false,
        hooks: {
            async beforeCreate(user) {
              if (user.changed("password")) {
                user.password = await user.hashPassword();
              }
              user.email = user.email.toLowerCase();
            },
            async beforeUpdate(user) {
              if (user.changed("password")) {
                user.password = await user.hashPassword();
              }
              user.email = user.email.toLowerCase();
            },
        },
    
    })

    User.associate = (models) => {
        models.User.hasMany(models.Project);
        models.User.hasMany(models.Task);
    };

    User.prototype.hashPassword = async function hashPassword() {
        return bcrypt.hash(this.password, 10);
    };

    return User;
}