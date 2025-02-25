const selectModel=require('../models/index').models.select;
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
  console.log("查询");
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
//分页查询
const findPage = async function(req,res,next){
  const page = Number(req.query.page) || 1;
  const pageSize = Number(req.query.pageSize) || 4;

  const offset = (page - 1) * pageSize;

  try {
    const result = await selectModel.findAndCountAll({
      offset,
      limit: pageSize,
    });

    // 根据总数据量生成页面大小选项
    const total = result.count;
    const maxPageSize = Math.min(total, 12); // 设置最大页面大小为12
    const pageSizeOptions = [2,4, 8, maxPageSize].filter(size => size <= total);

    const responseData = {
      list: result.rows,
      total: result.count,
      page: page,
      pageSize: pageSize,
      pageSizeOptions  // 动态生成的页面大小选项
    };

    res.json({
      code: 1,
      data: responseData
    });
  } catch (error) {
    res.status(500).json({
      code: 0,
      msg: '查询失败',
      error: error.message
    });
  }
}
module.exports ={
  create,
  //createAll
  find,
  putDelete,
  putUpdate,
  findPage
};
