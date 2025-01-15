import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Admin = {
  id: number;
  alias: string;
  function: string;
};

class AdminRepository {
  // The C of CRUD - Create operation

  async create(admin: Omit<Admin, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO admin (alias, function) VALUES (?, ?)",
      [admin.alias, admin.function],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM admin WHERE id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Admin;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM admin");

    // Return the array of items
    return rows as Admin[];
  }

  // The U of CRUD - Update operation
  async update(admin: Admin) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE admin SET alias = ?, function = ? WHERE id = ?",
      [admin.alias, admin.function],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing category from the "category" table
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM admin WHERE id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new AdminRepository();
