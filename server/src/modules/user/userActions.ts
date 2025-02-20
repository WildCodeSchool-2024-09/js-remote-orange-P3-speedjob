import type { RequestHandler } from "express";

// Import access to data
import userRepository from "./userRepository";

type UserProps = {
  id: number;
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  email: string;
  creation_date: string;
  modification_date: string;
  isAdmin: boolean;
  role: 'candidat' | 'societe';
  street_number: number;
  street_name: string;
  postcode: string;
  city: string;
  phone_number: number;
  cv_link: string;
  lm_link: string;
  light_description: string;
  complete_description: string;
  siret_number: number;
  cedex_number: number;
  raison_social: string;
  token: string;
};

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const user = await userRepository.readAll();

    // Respond with the items in JSON format
    res.json(user);
    return;
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const isAdmin: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const userId = Number(req.params.id);
    const user = await userRepository.read(userId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user.isAdmin);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const userId = Number(req.params.id);
    const user = await userRepository.read(userId);

    console.log("user", user);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the item data from the request body
    const newUser = {
      title: req.body.title,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      login: req.body.login,
      password: req.body.password,
      email: req.body.email,
      name_street: req.body.name_street,
      postcode: req.body.postcode,
      city: req.body.city,
      creation_date: req.body.creation_date,
      modification_date: req.body.modification_date,
      isAdmin: req.body.isAdmin,
      role: req.body.role === 'societe' || req.body.role === 'candidat' ? req.body.role : 'candidat',
      street_number: req.body.street_number,
      street_name: req.body.street_name,
      phone_number: req.body.phone_number,
      cv_link: req.body.cv_link,
      lm_link: req.body.lm_link,
      light_description: req.body.light_description,
      complete_description: req.body.complete_description,
      siret_number: req.body.siret_number,
      cedex_number: req.body.cedex_number,
      raison_social: req.body.raison_social,
      token: req.body.token,
    };

    // Create the item
    const insertId = await userRepository.create(newUser);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit: RequestHandler = async (req, res, next) => {
  try {
    // Update a specific category based on the provided ID
    const user = {
      id: Number(req.params.id),
      firstname: String(req.body.firstname),
      lastname: String(req.body.firstname),
      login: String(req.body.login),
      password: String(req.body.password),
      email: String(req.body.email),
      name_street: String(req.body.name_street),
      postcode: Number(req.body.postcode),
      city: String(req.body.city),
      creation_date: String(req.body.creation_date),
      modification_date: String(req.body.modification_date),
      isAdmin: Boolean(req.body.isAdmin),
      role: req.body.role === 'societe' || req.body.role === 'candidat' ? req.body.role : 'candidat',
      token: String(req.body.token),
      street_number: Number(req.body.street_number),
      street_name: String(req.body.street_name),
      phone_number: Number(req.body.phone_number),
      cv_link: String(req.body.cv_link),
      lm_link: String(req.body.lm_link),
      light_description: String(req.body.light_description),
      complete_description: String(req.body.complete_description),
      siret_number: Number(req.body.siret_number),
      cedex_number: Number(req.body.cedex_number),
      raison_social: String(req.body.raison_social),
    };

    const affectedRows = await userRepository.update(user);

    // If the category is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the category in JSON format
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    // Delete a specific category based on the provided ID
    const userId = Number(req.params.id);

    await userRepository.delete(userId);

    // Respond with HTTP 204 (No Content) anyway
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, edit, destroy, isAdmin };
