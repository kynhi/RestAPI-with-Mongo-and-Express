const validationHandler = require("../validations/validationHandler")
exports.index = (req,res) =>{
  throw new Error("Some Random Error")
  res.send({message: "hi"});
}

exports.store = (req,res,next) => {
  try {
    validationHandler(req)
    res.send({message:"The Name is" + req.body.name});

  }catch(err){
    next(err)
  }
}