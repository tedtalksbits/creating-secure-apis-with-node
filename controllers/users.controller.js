const UserModel = require("../model/user.model");
const crypto = require("crypto");

exports.insert = (req, res) => {
  const { password } = req.body;
  let salt = crypto.randomBytes(16).toString("base64");
  let hash = crypto
    .createHmac("sha512", salt)
    .update(req.body.password)
    .digest("base64");
  req.body.password = salt + "$" + hash;
  req.body.permissionLevel = 1;
  //   UserModel.createUser(req.body).then((result) => {
  //     res.status(201).send({ id: result._id });
  //   });

  res.status(201).json({
    msg: "successfully added " + password,
  });
};

exports.list = (req, res) => {
  let limit =
    req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  try {
    const result = UserModel.find()
      .limit(limit)
      .skip(limit + page);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ error });
  }
};
