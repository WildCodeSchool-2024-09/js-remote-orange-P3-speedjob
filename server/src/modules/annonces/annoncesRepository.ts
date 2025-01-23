import databaseClient from "../../../database/client";

import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";

type Result = ResultSetHeader;
type Rows = RowDataPacket[];

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
  // The C of CRUD - Create operation

  async create(annonces: Omit<Annonces, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO annonces (title, creation_date, modification_date, light_description, complete_description, remuneration, experience, work, field, company_id, is_apply) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM annonces WHERE id = ?",
      [id],
    );
    return rows[0] as Annonces;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM annonces");
    return rows as Annonces[];
  }

  // The U of CRUD - Update operation
  async update(annonces: Annonces) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE annonces SET title = ?, creation_date = ?, modification_date = ?, light_description = ?, complete_description = ?, remuneration = ?, experience = ?, work = ?, field = ?, company_id = ?, is_apply = ? WHERE id = ?",
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
        annonces.id,
      ],
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM annonces WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new AnnoncesRepository();
