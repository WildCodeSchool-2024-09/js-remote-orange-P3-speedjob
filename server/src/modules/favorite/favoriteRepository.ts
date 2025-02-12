import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type FavoriteProps = {
  id: number;
  user_id: number;
  annonce_id: number;
  is_apply: boolean;
};

class FavoriteRepository {
  // The C of CRUD - Creatxe operation

  async create(favorite: Omit<FavoriteProps, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO favorites (user_id, annonce_id, is_apply) VALUES (?, ?, ?)",
      [favorite.user_id, favorite.annonce_id, favorite.is_apply],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(user_id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM favorites WHERE user_id = ?",
      [user_id],
    );

    // Return the first row of the result, which represents the item
    return rows as FavoriteProps;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM favorites");

    // Return the array of items
    return rows as FavoriteProps[];
  }

  // The U of CRUD - Update operation
  async update(favorite: FavoriteProps) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE favorites SET is_apply = ? WHERE id = ?",
      [favorite.is_apply, favorite.id],
    );

    // Return how many rows were affected
    return result.affectedRows[0];
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing category from the "category" table
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM favorites WHERE id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new FavoriteRepository();
