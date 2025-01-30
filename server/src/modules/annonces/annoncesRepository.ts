import databaseClient from "../../../database/client";

import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";

type Result = ResultSetHeader;
type Rows = RowDataPacket[];

type AnnoncesProps = {
  id: number;
  creation_date: string;
  modification_date: number;
  light_description: string;
  complete_description: string;
  remuneration: string;
  experience: string;
  work: string;
  field: string;
  compagny_id: number;
  is_apply: boolean;
  title: string;
};

class AnnoncesRepository {
  // The C of CRUD - Create operation

  async create(annonces: Omit<AnnoncesProps, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table

    const [result] = await databaseClient.query<Result>(
      "INSERT INTO annonces (title, creation_date, modification_date, light_description, complete_description, remuneration, experience, work, field, compagny_id, is_apply) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
        annonces.compagny_id,
        annonces.is_apply,
      ],
    );
    return result.insertId;
  }

  // The Ss of CRUD - Search operations

  async searchQuery(searchQuery: string) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM annonces WHERE work LIKE ?",
      [searchQuery],
    );

    // Return the first row of the result, which represents the item
    return rows as AnnoncesProps[];
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM articles WHERE id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows as AnnoncesProps[];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "annonces" table

    const [rows] = await databaseClient.query<Rows>("SELECT * FROM annonces");
    return rows as AnnoncesProps[];
  }

  // The U of CRUD - Update operation
  async update(annonces: AnnoncesProps) {
    // Execute the SQL UPDATE query to update an existing item in the "annonces" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE annonces SET creation_date = ?, modification_date = ?, light_description = ?, complete_description = ?, remuneration = ?, experience = ?, work = ?, field = ?, company_id = ?, is_apply = ?, title = ? WHERE id = ?",

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
        annonces.compagny_id,
        annonces.is_apply,
        annonces.id,
      ],
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing item from the "annonces" table

    const [result] = await databaseClient.query<Result>(
      "DELETE FROM annonces WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new AnnoncesRepository();
