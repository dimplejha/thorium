const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let header = req.headers;
    let token=req.headers["x-auth-token"]
if (!token)token=req.headers["x-auth-token"]
if(!token) return res.send({status:false,msg:"token must be present"})

let decodedToken = jwt.verify(token, "shrati-marathi");
    console.log(decodedToken)
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });


    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request




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