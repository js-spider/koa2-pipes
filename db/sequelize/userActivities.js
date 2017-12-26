/**
 * Created by pc on 17-11-13.
 */
module.exports = function(sequelize, DataTypes) {
    let UserActivity =  sequelize.define("UserActivity", {
        app: DataTypes.STRING,   // 指明统计的哪个服务
        type: DataTypes.STRING,  // 类型
        userId: DataTypes.STRING,
        desc: DataTypes.STRING,
        info: DataTypes.JSON  // custom info
    }, {
        schema: 'audit_log'
    });
    return UserActivity;
};