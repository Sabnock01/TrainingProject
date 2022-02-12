module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        leadId: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            },
            allowNull: false,
        }
    }, { underscored: true, timestamps: false});

    Project.associate = (models) => {
        models.Project.belongsTo(models.User, {
            foreignKey: "userId",
            as: "users"
        });
    }

    return Project;
}