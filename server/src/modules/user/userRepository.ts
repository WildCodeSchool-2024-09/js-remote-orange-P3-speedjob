import databaseClient from "../../../database/client";

import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";

type Result = ResultSetHeader;
type Rows = RowDataPacket[];

type User = {
  // token: string;
  id: number;
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  email: string;
  creation_date: string | null;
  modification_date: string | null;
  isAdmin: boolean;
  role: string;
  street_number: number | null;
  street_name: string | null;
  postcode: number | null;
  city: string | null;
  phone_number: number | null;
  birthdate: string | null;
  cv_link: string | null;
  lm_link: string | null;
  light_description: string | null;
  complete_description: string | null;
  siret_number: number | null;
  cedex_number: string | null;
  raison_social: string | null;
};

class UserRepository {
  // The C of CRUD - Create operation

  async create(user: Omit<User, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, login, birthdate, password, email) VALUES (?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.login,
        user.birthdate,
        user.password,
        user.email,
      ],
    );
    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as User;
  }

  async checkuser(login: string, password: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE login = ? AND password = ?",
      [login, password],
    );
    // Return the first row of the result, which represents the item
    return rows[0] as User;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");

    // Return the array of items
    return rows as User[];
  }

  // The U of CRUD - Update operation
  async update(user: User) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE user SET firstname = ?, lastname = ?, login = ?, password = ?, email = ?, creation_date = ?, modification_date = ?,isAdmin = ?, role = ?, street_number = ?, street_name = ?, postcode = ?, city = ?, phone_number = ?, birthdate = ?, cv_link = ?, lm_link = ?, light_description = ?, complete_description = ?, siret_number = ?, cedex_number = ?, raison_social = ? WHERE id = ?",
      [
        user.firstname,
        user.lastname,
        user.login,
        user.password,
        user.email,
        user.creation_date,
        user.modification_date,
        user.isAdmin,
        user.role,
        user.street_number,
        user.street_name,
        user.postcode,
        user.city,
        user.phone_number,
        user.birthdate,
        user.cv_link,
        user.lm_link,
        user.light_description,
        user.complete_description,
        user.siret_number,
        user.cedex_number,
        user.raison_social,
        user.id,
      ],
    );
    // Return how many rows were affected
    return result.affectedRows[0];
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing category from the "category" table
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM user WHERE id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new UserRepository();
