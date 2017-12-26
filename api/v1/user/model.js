/**
 * Created by pc on 17-11-10.
 */
const MS = require('../../../db');
const sequelize = MS.client;
const userMDL = module.exports = {};

userMDL.login = async (params)=>{
    return await MS.User.findOne({
        where:{
            $or:[
                {email:params.account},
                {name:params.account}
            ],
        }
    })
};
userMDL.getLogs = async (params,user)=>{
    let options = {
        /*attributes:[],*/
       /* include:{
            model:MS.User,
            attributes:['autoKey','name'],
            as:'user'
        },*/
        where:{},
        offset:params.page*params.limit,
        limit:params.limit
    }
    if(params.type) options.where.type = {$iLike: `%${params.type}%`}
    if(params.userId) options.where.userId = params.userId;
    if(params.desc) options.where.desc = {$iLike: `%${params.desc}%`};
    if(params.startAt) options.where.createdAt = {$gte:params.startAt};
    if(params.endAt) options.where.createdAt = {$lte:params.endAt};
    if(params.search){
        let s = {$iLike:`%${search}%`};
        options.where.$or = [
            {userId:s},{type:s}, {desc:s}
        ]
    }
    if(params.orderKey) options.order = [[params.orderKey,params.orderBy]]
    return await MS.Log.findAndCountAll(options);
};
userMDL.createLogs = async (params,user)=>{
    return MS.Log.create(params)
};
userMDL.test = async (params,user)=>{
    return await MS.User.findOne({
        include:{
            model:MS.UserResource,
            as:'userResource'
        },
        where:{
            autoKey:user.autoKey,
        }
    })
}
userMDL.test1 = async (params,user)=>{
    let userR = await sequelize.query(`
    SELECT u.*,ur.* FROM dc_schema.${MS.User.tableName} u
    LEFT JOIN dc_schema."${MS.UserResource.tableName}" ur ON u."autoKey" = ur."userId"
    WHERE u."autoKey" = :autoKey `,
    {
        replacements: { autoKey: user.autoKey },
        model: MS.User ,
        include:{
            model:MS.UserResource,
            as:'userResource'
        },
        type: sequelize.QueryTypes.SELECT ,

    }
    )
    console.log(userR)
    return userR;
}