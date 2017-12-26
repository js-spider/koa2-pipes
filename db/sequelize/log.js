/**
 * Created by pc on 17-11-13.
 */
module.exports = function(sequelize, DataTypes) {
    let Log =  sequelize.define("Log", {
        type: DataTypes.STRING,  // 类型
        userId: DataTypes.STRING,
        desc: DataTypes.STRING,
        info: DataTypes.JSON  // custom info
    }, {
        schema: 'audit_log',
        tableName: 'Logs',
        timestamps:true,
        associate: function (models) {
            Log.belongsTo(models.User, {as: "user", foreignKey: "userId"});
        }
    });
    return Log;
};