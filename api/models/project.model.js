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
            allowNull: true,
        }
    }, { underscored: true, timestamps: false});

    Project.associate = (models) => {
        models.Project.belongsTo(models.User, {
            foreignKey: "id",
            as: "users"
        });
        models.Project.hasMany(models.Task, {
            foreignKey: "projectId",
            as: "tasks"
        })
    }

    return Project;
}