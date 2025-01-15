import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Item = {
  id: number;
  creation_date: string;
  modification_date: number;
  light_description: string;
  complete_description: string;
  remuneration: number;
  experience: string;
  work: string;
  field: string;
  company_id: number;
  is_apply: boolean;
  title: string;
};

class AnnoncesRepository {
  // The C of CRUD - Creatxe operation

  async create(item: Omit<Item, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into item (title, creation_dat, modification_date, light_description, complete_description, remuneration, experience, work, field, company_id, is_apply) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        item.title,
        item.creation_date,
        item.modification_date,
        item.light_description,
        item.complete_description,
        item.remuneration,
        item.experience,
        item.work,
        item.field,
        item.company_id,
        item.is_apply,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from item where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Item;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from item");

    // Return the array of items
    return rows as Item[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new AnnoncesRepository();
