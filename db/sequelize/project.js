/**
 * Created by pc on 17-11-16.
 */

module.exports = function(sequelize,DataTypes){
    let Project = sequelize.define('Project',{
        autoKey: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        projectId: {type: DataTypes.INTEGER},
        versionId: {type: DataTypes.INTEGER},
        version: {type: DataTypes.STRING},
        name: {type: DataTypes.STRING},
        creator: {type: DataTypes.INTEGER},
        description: {type: DataTypes.STRING},
        lastModifyTime: {type: DataTypes.DATE},
        opStatus: {type: DataTypes.INTEGER},  // 0-exist, 1-delete
        variable: {type: DataTypes.JSON},
        info: {type: DataTypes.JSON},   // store some meta info
        likeCount: {type: DataTypes.INTEGER},
        env: {type: DataTypes.STRING},
        isPrivate: {type: DataTypes.BOOLEAN},
        uuid: {type: DataTypes.UUID}
    },{
        tableName: 't_project',
        schema: 'dc_schema',
        associate: function (models) {

        }
    })
    return Project;
}