exports.index = (req,res) =>{
  throw new Error("Some Random Error")
  res.send({message: "hi"});
}