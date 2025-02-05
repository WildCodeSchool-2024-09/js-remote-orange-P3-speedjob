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

    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET, {
      expiresIn: "2 days",
    });
    user.token = token;
    // Respond with the items in JSON format
    res.json(user);
    return;
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
    return res.status(401).send({ check: false });
  }

  const appSecret = process.env.APP_SECRET;

  if (!appSecret) {
    return res.status(500).send({ error: "APP_SECRET is not defined" });
  }
  jwt.verify(token, appSecret, async (error, decoded) => {
    if (error) {
      return res.status(401).send({ check: false });
    }

    const user: { token?: string } = await userRepository.read(decoded.id);

    return res.status(200).send({ check: true, user: user });
  });
};

export default { SignIn, SignUp, Check };
