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
        // why do you not need a has many for projects? or if you do how would that work? get duplicate alias error
    }

    return Project;
}