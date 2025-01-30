import type { RequestHandler } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";

import userRepository from "../user/userRepository";

const SignIn: RequestHandler = async (req, res, next) => {
  const { login } = req.body.values;
  const { password } = req.body.values;

  try {
    // Fetch all items
    const user: { token?: string } = await userRepository.checkuser(
      login,
      password,
    );
    if (!process.env.APP_SECRET) {
      throw new Error("APP_SECRET is not defined");
    }
    const token = jwt.sign({ login: login }, process.env.APP_SECRET, {
      expiresIn: "2 days",
    });
    user.token = token;
    // Respond with the items in JSON format
    res.json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const SignUp: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const user = await userRepository.readAll();

    // Respond with the items in JSON format
    res.json(user);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const Check: RequestHandler = async (req, res, next) => {
  const token = req.headers.token as string;

  if (!token) {
    res.status(401).send({ check: false });
    return;
  }

  const appSecret = process.env.APP_SECRET;
  if (!appSecret) {
    res.status(500).send({ error: "APP_SECRET is not defined" });
    return;
  }
  jwt.verify(token, appSecret, (error, decoded) => {
    if (error) {
      res.status(401).send({ check: false });
      return;
    }
    next();
  });
};

export default { SignIn, SignUp, Check };
