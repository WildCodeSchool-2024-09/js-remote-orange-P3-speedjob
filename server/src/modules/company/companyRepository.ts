import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Item = {
  id: number;
  light_description: string;
  complete_description: string;
  siret_number: number;
  phone_number: number;
  street_number: number;
  street_name: string;
  postcode: number;
  city: string;
  cedex_number: number;
  user_id: number;
  raison_social: string;
};

class CompanyRepository {
  // The C of CRUD - Create operation

  async create(item: Omit<Item, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into item (title, user_id) values (?, ?)",
      [
        item.light_description,
        item.complete_description,
        item.siret_number,
        item.phone_number,
        item.street_number,
        item.postcode,
        item.city,
        item.cedex_number,
        item.user_id,
        item.raison_social,
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

export default new CompanyRepository();
