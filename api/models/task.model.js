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
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
        
    }, { underscored: true, timestamps: false});

    Task.associate = (models) => {
        models.Task.belongsTo(models.Project, {
            foreignKey: "projectId",
            as: "project"
        });
        models.Task.belongsTo(models.User, {
            foreignKey: "userId",
            as: "user"
        });
    }

    return Task;
}