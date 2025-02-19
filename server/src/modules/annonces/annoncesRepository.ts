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
  is_apply: boolean;
  title: string;
  user_id: number;
};

type favoritesProps = {
  id: number;
  user_id: number;
  annonce_id: number;
  is_apply: boolean;
};

type UserProps = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  street_number: number;
  street_name: string;
  postcode: number;
  city: string;
  phone_number: number;
};

class AnnoncesRepository {
  // The C of CRUD - Create operation

  async create(annonces: Omit<AnnoncesProps, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table

    const [result] = await databaseClient.query<Result>(
      "INSERT INTO annonces (title, light_description, complete_description, remuneration, experience, work, field, user_id) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        annonces.title,
        annonces.light_description,
        annonces.complete_description,
        annonces.remuneration,
        annonces.experience,
        annonces.work,
        annonces.field,
        annonces.user_id,
      ],
    );
    return result.insertId;
  }

  // The Ss of CRUD - Search operations

  async searchQuery(searchQuery: string) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const searchPattern = `%${searchQuery}%`;

    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM annonces WHERE title LIKE ?",
      [searchPattern],
    );

    // Return the first row of the result, which represents the item
    return rows as AnnoncesProps[];
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM annonces WHERE id = ?",
      [id],
    );
    // Return the first row of the result, which represents the item
    return rows as AnnoncesProps[];
  }

  async readByUserId(user_id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM annonces WHERE user_id = ?",
      [user_id],
    );
    return rows as AnnoncesProps[];
  }

  async readByAnnonce(user_id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT A.*, U.firstname, U.lastname,U. email, U.phone_number, F.id as idFavorites FROM user U JOIN favorites F  ON u.id = f.user_id JOIN annonces A on F.annonce_id = A.id WHERE A.user_id = ? AND F.is_apply = 1",
      [user_id],
    );
    return rows as AnnoncesProps[];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM annonces");

    // Return the array of items
    return rows as AnnoncesProps[];
  }

  // The U of CRUD - Update operation
  async update(annonces: AnnoncesProps) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table

    const [result] = await databaseClient.query<Result>(
      "UPDATE annonces SET light_description = ?, complete_description = ?, remuneration = ?, experience = ?, work = ?, field = ?, title = ? WHERE id = ?",

      [
        annonces.title,
        annonces.light_description,
        annonces.complete_description,
        annonces.remuneration,
        annonces.experience,
        annonces.work,
        annonces.field,
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
