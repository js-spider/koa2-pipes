/**
 * Created by pc on 17-11-15.
 */
const MS = require('../../../db');
const authMDL = module.exports = {};

authMDL.classAuth = async(pcode,type,userId)=>{
    return await MS.Operate.findOne({
        where:{
            pcode:pcode,
            resourceType:type,
            isInstance:false,
            userId:userId
        }
    })
}