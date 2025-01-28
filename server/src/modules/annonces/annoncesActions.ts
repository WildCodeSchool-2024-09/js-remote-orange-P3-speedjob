import type { RequestHandler } from "express";

// Import access to data
import annoncesRepository from "./annoncesRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const annonces = await annoncesRepository.readAll();

    // Respond with the items in JSON format
    res.json(annonces);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const annoncesId = Number(req.params.id);
    const annonces = await annoncesRepository.read(annoncesId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (annonces == null) {
      res.sendStatus(404);
    } else {
      res.json(annonces);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The S of SEARCH - Search operation
const search: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided searchQuery
    const searchQuery = String(req.body.searchQuery);
    const annonces = await annoncesRepository.searchQuery(searchQuery);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (annonces == null) {
      res.sendStatus(404);
    } else {
      res.json(annonces);
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
    const newAnnonces = {
      creation_date: req.body.title,
      modification_date: req.body.modification_date,
      light_description: req.body.light_description,
      complete_description: req.body.complete_description,
      remuneration: req.body.remuneration,
      experience: req.body.experience,
      work: req.body.work,
      field: req.body.field,
      company_id: req.body.company_id,
      is_apply: req.body.is_apply,
      title: req.body.title,
    };

    // Create the item
    const insertId = await annoncesRepository.create(newAnnonces);

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
    const annonces = {
      id: Number(req.body.id),
      creation_date: String(req.body.creation_date),
      modification_date: Number(req.body.modification_date),
      light_description: String(req.body.light_description),
      complete_description: String(req.body.complete_description),
      remuneration: String(req.body.remuneration),
      experience: String(req.body.experience),
      work: String(req.body.work),
      field: String(req.body.field),
      company_id: Number(req.body.company_id),
      is_apply: Boolean(req.body.is_apply),
      title: String(req.body.title),
    };

    const affectedRows = await annoncesRepository.update(annonces);

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
    const annoncesId = Number(req.params.id);

    await annoncesRepository.delete(annoncesId);

    // Respond with HTTP 204 (No Content) anyway
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, edit, destroy, search };
