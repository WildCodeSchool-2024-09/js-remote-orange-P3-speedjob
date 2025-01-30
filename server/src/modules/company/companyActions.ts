import type { RequestHandler } from "express";

// Import access to data
import companyRepository from "./companyRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const company = await companyRepository.readAll();

    // Respond with the items in JSON format
    res.json(company);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const companyId = Number(req.params.id);
    const company = await companyRepository.read(companyId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (company == null) {
      res.sendStatus(404);
    } else {
      res.json(company);
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
    const newCompany = {
      light_description: req.body.light_description,
      complete_description: req.body.complete_description,
      siret_number: req.body.siret_number,
      phone_number: req.body.phone_number,
      street_number: req.body.street_number,
      street_name: req.body.street_name,
      postcode: req.body.postcode,
      city: req.body.city,
      cedex_number: req.body.cedex_number,
      user_id: req.body.user_id,
      raison_social: req.body.raison_social,
    };

    // Create the item
    const insertId = await companyRepository.create(newCompany);

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
    const company = {
      id: Number(req.body.id),
      light_description: String(req.body.light_description),
      complete_description: String(req.body.complete_description),
      siret_number: Number(req.body.siret_number),
      phone_number: Number(req.body.phone_number),
      street_number: Number(req.body.street_number),
      street_name: String(req.body.street_name),
      postcode: Number(req.body.postcode),
      city: String(req.body.city),
      cedex_number: Number(req.body.cedex_number),
      user_id: Number(req.body.user_id),
      raison_social: String(req.body.raison_social),
    };

    const affectedRows = await companyRepository.update(company);

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
    const companyId = Number(req.params.id);

    await companyRepository.delete(companyId);

    // Respond with HTTP 204 (No Content) anyway
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
