'use strict';
module.exports = function (sequelize, DataTypes) {
    let UserResource =  sequelize.define('UserResource', {
        autoKey: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        userId: {type: DataTypes.INTEGER,allowNull: false},
        resource: {type: DataTypes.JSON},
        status: {type: DataTypes.STRING,default:'0'},
        modifier: {type: DataTypes.INTEGER,allowNull:false},
        modifyTime: {type: DataTypes.DATE,default:DataTypes.NOW},
    }, {
        timestamps: false,
        tableName: 't_userResource',
        schema: 'dc_schema',
        associate: function (models) {
            UserResource.belongsTo(models.User, {as: "user", foreignKey: "userId"});
        }
    });
    return UserResource;
}