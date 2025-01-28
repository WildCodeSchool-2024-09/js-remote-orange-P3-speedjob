import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Annonces = {
  id: number;
  creation_date: string;
  modification_date: number;
  light_description: string;
  complete_description: string;
  remuneration: string;
  experience: string;
  work: string;
  field: string;
  company_id: number;
  is_apply: boolean;
  title: string;
};

class AnnoncesRepository {
  // The C of CRUD - Creatxe operation

  async create(annonces: Omit<Annonces, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO annonces (title, creation_dat, modification_date, light_description, complete_description, remuneration, experience, work, field, company_id, is_apply) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        annonces.title,
        annonces.creation_date,
        annonces.modification_date,
        annonces.light_description,
        annonces.complete_description,
        annonces.remuneration,
        annonces.experience,
        annonces.work,
        annonces.field,
        annonces.company_id,
        annonces.is_apply,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Ss of CRUD - Search operations

  async searchQuery(searchQuery: string) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM annonce WHERE work LIKE %$?%",
      [searchQuery],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Annonces;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM articles WHERE id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Annonces;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM annonces");

    // Return the array of items
    return rows as Annonces[];
  }

  // The U of CRUD - Update operation
  async update(annonces: Annonces) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE annonces SET alias = ?, function = ? WHERE id = ?",
      [
        annonces.creation_date,
        annonces.modification_date,
        annonces.light_description,
        annonces.complete_description,
        annonces.remuneration,
        annonces.experience,
        annonces.work,
        annonces.field,
        annonces.company_id,
        annonces.is_apply,
        annonces.title,
      ],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing category from the "category" table
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM annonces WHERE id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new AnnoncesRepository();
