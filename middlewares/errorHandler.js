module.exports = (error,req,res,next) =>{
  const status = error.statusCode || 500;
  const message = error.message;
  const validation = error.validation;
  const data = error.data;
  res.status(status).json({
    message,
    data,
    validation
  });
};