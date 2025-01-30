import databaseClient from "../../../database/client";

import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";

type Result = ResultSetHeader;
type Rows = RowDataPacket[];

type User = {
  token: never;
  id: number;
  firstname: string;
  lastname: string;
  login: string;
  password: string;
  email: string;
  creation_date: string;
  modification_date: string;
  isAdmin: boolean;
  role_id: number;
  admin_id: number;
};

class UserRepository {
  // The C of CRUD - Create operation

  async create(user: Omit<User, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, login, password, email, creation_date, modification_date, isAdmin, role_id, admin_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.login,
        user.password,
        user.email,
        user.creation_date,
        user.modification_date,
        user.isAdmin,
        user.role_id,
        user.admin_id,
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
      "UPDATE user SET firstname = ?, lastname = ?, login = ?, password = ?, email = ?, creation_date = ?, modification_date = ?, isAdmin = ?, role_id = ?, admin_id = ? WHERE id = ?",
      [
        user.firstname,
        user.lastname,
        user.login,
        user.password,
        user.email,
        user.creation_date,
        user.modification_date,
        user.isAdmin,
        user.role_id,
        user.admin_id,
        user.id,
      ],
    );

    // Return how many rows were affected
    return result.affectedRows;
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
