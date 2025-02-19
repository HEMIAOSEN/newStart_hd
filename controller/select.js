const selectModel=require('../models/index').models.select;;
//单条新增
const create = async function(req,res,next){
  const {name,cast} =req.body;
  const data= await selectModel.create({
    name,
    cast
  })
  res.json({code:1,data});
}
;
//多条新增
// const createAll= async function(req,res,next){
//   const {name,cast} =req.body;
//   const data= await selectModel.bulkCreate([
//     {
//       name,
//       cast
//     },
//     {
//       name,
//       cast
//     }
//   ])
//   res.json({code:1,data});
// }
//查询单条
const find = async function(req,res,next){
  const {id} =req.query;//查询是query
  let data
  if(id){
    data=await selectModel.findOne({
      where:{
        id
      }
    })

  }else{
    data= await selectModel.findAll();
  }
  res.json({code:1,msg:'ok',data});
}
module.exports ={
  create,
  //createAll
  find
};
