const jwt=require('jsonwebtoken')

let authentication=function(req,res,next){
  try{
  let userId=req.params.userId
   let token = req.headers["x-auth-token"];
    if (!token) return res.send({ msg: "token must be present" });
    
    let decodedToken = jwt.verify(token, "Dj");
    console.log(decodedToken)
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });

      if(decodedToken.userId != userId) return res.send("unathorized access")
      req.userId=userId
      next()
  }
  catch (err){
    res.status(500).send({msg:"this is error", error:err.message})
  }
}
module.exports.authentication=authentication