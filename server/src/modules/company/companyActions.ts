import type { RequestHandler } from "express";

// Import access to data
import companyRepository from "./companyRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const items = await companyRepository.readAll();

    // Respond with the items in JSON format
    res.json(items);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const itemId = Number(req.params.id);
    const item = await companyRepository.read(itemId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
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
    const newItem = {
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
    const insertId = await companyRepository.create(newItem);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
