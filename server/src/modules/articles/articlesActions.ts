import type { RequestHandler } from "express";

// Import access to data
import articlesRepository from "./articlesRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const articles = await articlesRepository.readAll();

    // Respond with the items in JSON format
    res.json(articles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const articlesId = Number(req.params.id);
    const articles = await articlesRepository.read(articlesId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (articles == null) {
      res.sendStatus(404);
    } else {
      res.json(articles);
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
    const newArticles = {
      title: req.body.title,
      date: req.body.date,
      light_description: req.body.light_description,
      compl_description: req.body.compl_description,
      picture: req.body.picture,
    };

    // Create the item
    const insertId = await articlesRepository.create(newArticles);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    // Update a specific category based on the provided ID
    const articles = {
      id: Number(req.body.id),
      title: String(req.body.title),
      date: String(req.body.date),
      light_description: String(req.body.light_description),
      compl_description: String(req.body.compl_description),
      picture: String(req.body.picture),
    };

    const affectedRows = await articlesRepository.update(articles);

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
    const articlesId = Number(req.params.id);

    await articlesRepository.delete(articlesId);

    // Respond with HTTP 204 (No Content) anyway
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
