module.exports = (sequelize,DataTypes) => sequelize.define(
    'User', {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
        },
        Email:{
            unique: true,
            allowNull: false,
            type:DataTypes.STRING
        },
        UUID:{
            type:DataTypes.STRING
        },
        Password: {
            type: DataTypes.STRING,
        },
        Status: {
            type: DataTypes.BOOLEAN,
        },
    }, {
        tableName:'User',
        timestamps: true,
    }
);