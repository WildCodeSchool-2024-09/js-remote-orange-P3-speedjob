import type { RequestHandler } from "express";

// Import access to data
import adminRepository from "./adminRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const admin = await adminRepository.readAll();

    // Respond with the items in JSON format
    res.json(admin);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const adminId = Number(req.params.id);
    const admin = await adminRepository.read(adminId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (admin == null) {
      res.sendStatus(404);
    } else {
      res.json(admin);
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
    const newAdmin = {
      alias: req.body.alias,
      function: req.body.function,
    };

    // Create the item
    const insertId = await adminRepository.create(newAdmin);

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
    const admin = {
      id: Number(req.body.id),
      alias: String(req.body.alias),
      function: req.body.function,
    };

    const affectedRows = await adminRepository.update(admin);

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
    const adminId = Number(req.params.id);

    await adminRepository.delete(adminId);

    // Respond with HTTP 204 (No Content) anyway
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
