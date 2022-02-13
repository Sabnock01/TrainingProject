module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        projectId: {
            type: DataTypes.INTEGER,
            references: {
                model: "projects",
                key: "id"
            },
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            },
            allowNull: false,
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    }, { underscored: true, timestamps: false});

    Task.associate = (models) => {
        // needed to add these two objects to prevent duplicate properties: userId and UserId, projectId and ProjectId
        models.Task.belongsTo(models.Project, {
            foreignKey: "id",
            as: "projects"
        });
        models.Task.belongsTo(models.User, {
            foreignKey: "id",
            as: "users"
        });
    }

    return Task;
}