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
//删除单条
const putDelete = async function(req,res,next){
  const {id} =req.body;

  const data = await selectModel.destroy({
    where:{
      id
    }
  })
  res.json({code:1,msg:'删除成功',data});
}
//更新单条
const putUpdate = async function(req,res,next){
  const {id,name,cast} =req.body;

  // 添加参数验证
  if (!id) {
    return res.status(400).json({
      code: 0,
      msg: '缺少id参数'
    });
  }

  try {
    // 检查记录是否存在
    const existingRecord = await selectModel.findByPk(id);
    if (!existingRecord) {
      return res.json({
        code: 0,
        msg: '记录不存在'
      });
    }

    const [affectedCount] = await selectModel.update(
      {
        name,
        cast
      },
      {
        where: {
          id: id
        }
      }
    );

    if (affectedCount === 0) {
      return res.status(400).json({
        code: 0,
        msg: '更新失败，没有记录被修改'
      });
    }

    res.json({code:1,msg:'更新成功',data: {affectedCount}});
  } catch (error) {
    res.status(500).json({code:0,msg:'更新失败',error: error.message});
  }

}
module.exports ={
  create,
  //createAll
  find,
  putDelete,
  putUpdate
};
