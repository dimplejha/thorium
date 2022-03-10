const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const createUsers = async function (req, res) {
  try {
    var data = req.body
    if (Object.keys(data).length != 0) {
      let saveData = await userModel.create(data)
      res.status(201).send({ msg: saveData })
    } else {
      res.status(400).send({ msg: "data must be present" })
    }
  }

  catch (err) {
      console.log("this is error:  ", err)
      res.status(500).send({ msg: "bad request" })
    }
  }

const login = async function (req, res) {
    try {
      let emailId = req.body.emailId
      let password = req.body.password
      let user = await userModel.findOne({ emailId: emailId, password: password });
      if (!user)
        return res.send({ msg: "username or the password is not correrct" });

      let token = jwt.sign({ userId: user._id.toString() },
        "Dj"
      );
      res.setHeader("x-auth-token", token);
      res.status(200).send({ status: true, data: token });
    }

    catch (err) {
      res.status(500).send({ msg: "bad request" })

    }
  }


  let checkToken = async function (req, res) {
    try {
      let userId = req.params.userId;
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.send({ msg: "No such user exists" });

      res.status(200).send({ data: userDetails });
    }
    catch (err) {
      res.status(500).send({ msg: "bad request" })

    }
  }

  let updatedUser = async function (req, res) {
    try {
      let uId = req.params.userId
      let attribute = req.body
      let updated = await userModel.updateOne({ _id: uId }, { $set: { attribute } })
      res.status(200).send(updated)
    }
    catch (err) {
      res.status(500).send({ msg: "bad request" })

    }

  }

  let deletedUser = async function (req, res) {
    try {
      let usId = req.params.userId
      let deleted = await userModel.updateOne({ _id: usId }, { $set: { isDeleted: true } })
      resstatus(200).send(deleted)
    }
    catch (err) {
      res.status(500).send({ msg: "bad request" })

    }
  }

  module.exports.createUsers = createUsers
  module.exports.login = login
  module.exports.checkToken = checkToken
  module.exports.updatedUser = updatedUser
  module.exports.deletedUser = deletedUser