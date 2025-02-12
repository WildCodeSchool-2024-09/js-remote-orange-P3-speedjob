import type { RequestHandler } from "express";

// Import access to data
import favoriteRepository from "./favoriteRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const favorite = await favoriteRepository.readAll();

    // Respond with the items in JSON format
    res.json(favorite);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const favoriteId = Number(req.params.id);
    const favorite = await favoriteRepository.read(favoriteId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (favorite == null) {
      res.sendStatus(404);
    } else {
      res.json(favorite);
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
    const newFavorite = {
      user_id: req.body.favoriteData.user_id,
      annonce_id: req.body.favoriteData.annonceId,
      is_apply: req.body.favoriteData.is_apply,
    };
    // Create the item
    const insertId = await favoriteRepository.create(newFavorite);

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
    const favorite = {
      is_apply: Boolean(req.body.is_apply),
      id: Number(req.params.id),
    };

    const affectedRows = await favoriteRepository.update(favorite);

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
    const favoriteId = Number(req.params.id);

    await favoriteRepository.delete(favoriteId);

    // Respond with HTTP 204 (No Content) anyway
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
