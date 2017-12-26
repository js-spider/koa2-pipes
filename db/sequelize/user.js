/**
 * Created by pc on 17-11-14.
 */
module.exports = function(sequelize,DataTypes) {
    let User =  sequelize.define('User', {
        autoKey: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, unique: true},
        pwdhash: {type: DataTypes.STRING,
            set: function(v) {
                this.setDataValue('pwdhash', h.md5(v));
            },
            allowNull: false
        },
        email: {type: DataTypes.STRING, unique: true},
        token: DataTypes.STRING,
        createtime: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
        status: DataTypes.STRING,
        avatar: DataTypes.STRING,
        group: {type: DataTypes.INTEGER, defaultValue: 1},
        info: DataTypes.JSON,
        ehcUser: DataTypes.JSON,
        uuid: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4}
    },{
        tableName: 't_user',
        schema: 'dc_schema',
        associate: function (models) {
            User.hasOne(models.UserResource, {as: "userResource", foreignKey: "userId"});
            User.hasOne(models.Log, {as: "logs", foreignKey: "userId"});
        }
    });
    return User;
}