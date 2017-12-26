/**
 * Created by pc on 17-11-16.
 */
const MS = require('../../../db');
const projectMDL = module.exports = {};

projectMDL.index = async (params,user)=>{
    let options = {
        where:{},
        offset:params.page*params.limit,
        limit:params.limit
    }


}