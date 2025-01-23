const { db } = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

import type { VerifyErrors } from "jsonwebtoken";

const checkToken = (
  req: import("express").Request,
  res: import("express").Response,
  next: import("express").NextFunction,
) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).send({ check: false });
  }

  jwt.verify(
    token,
    process.env.SECRET,
    (error: VerifyErrors | null, decoded: object | undefined) => {
      if (error) {
        return res.status(401).send({ check: false });
      }
    },
  );
  next();
};

const checkUser = async (
  req: import("express").Request,
  res: import("express").Response,
  next: import("express").NextFunction,
) => {
  const { login, password } = req.body.values;
  const [rows, fields] = await db.query(
    `SELECT * FROM users WHERE login='${login}'`,
  );

  if (rows.length === 0) {
    return res.send({
      message: "le compte n'existe pas",
      user: false,
    });
  }
  req.body.values.pass = rows[0].password;
  next();
};

const checkPassword = async (
  req: import("express").Request,
  res: import("express").Response,
  next: import("express").NextFunction,
) => {
  const { pass, password } = req.body.values;
  const passwordIsValid = bcrypt.compareSync(password, pass);

  if (!passwordIsValid) {
    return res.send({
      message: "Password erreur",
      user: false,
    });
  }
  next();
};

const auth = { checkToken, checkUser, checkPassword };
module.exports = auth;
