module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        leadId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, { underscored: true, timestamps: false})

    return Project;
}