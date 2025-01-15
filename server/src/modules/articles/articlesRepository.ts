import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Articles = {
  id: number;
  title: string;
  date: string;
  light_description: string;
  compl_description: string;
  admin_id: number;
  picture: string;
};

class ArticlesRepository {
  // The C of CRUD - Create operation

  async create(articles: Omit<Articles, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO articles (title, date, light_description, compl_descritpion, admin_id, picture) VALUES (?, ?, ?, ?, ?, ?)",
      [
        articles.title,
        articles.date,
        articles.light_description,
        articles.compl_description,
        articles.admin_id,
        articles.picture,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM articles WHERE id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Articles;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM articles");

    // Return the array of items
    return rows as Articles[];
  }

  // The U of CRUD - Update operation
  async update(admin: Articles) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE articles SET title = ?, date = ?, light_description = ?, compl_description = ?, admin_id = ?, picture = ? WHERE id = ?",
      [
        admin.title,
        admin.date,
        admin.light_description,
        admin.compl_description,
        admin.admin_id,
        admin.picture,
        admin.id,
      ],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing category from the "category" table
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM articles WHERE id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new ArticlesRepository();
