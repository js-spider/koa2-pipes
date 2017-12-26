/**
 * Created by pc on 17-11-15.
 */
module.exports = function(sequelize,DataTypes) {
    let PlainOperate = sequelize.define('PlainOperate',{
        resourceId: DataTypes.STRING,
        resourceType: {type: DataTypes.INTEGER, notNull: true},
        isInstance: {type: DataTypes.BOOLEAN, notNull: true},
        roleId: DataTypes.UUID,
        clusterId: DataTypes.STRING,    // EDS cluster will use it
        pcode: {type: DataTypes.INTEGER, notNull: true},
        extension: DataTypes.JSON,
        userId:DataTypes.INTEGER
    },{
        schema: 'privilege_schema',
        tableName: 'plain_operate',
    })
    return PlainOperate;
}