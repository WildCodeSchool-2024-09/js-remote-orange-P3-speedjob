import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Company = {
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

  async create(company: Omit<Company, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO company (light_descritption, complete_description, siret_number, phone_number, street_number, postcode, city, cedex_number, user_id, raison_social) VALUES (?, ?, ? ,? ,? ,? ,? ,? ,? ,?)",
      [
        company.light_description,
        company.complete_description,
        company.siret_number,
        company.phone_number,
        company.street_number,
        company.postcode,
        company.city,
        company.cedex_number,
        company.user_id,
        company.raison_social,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM company WHERE id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Company;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM company");

    // Return the array of items
    return rows as Company[];
  }

  // The U of CRUD - Update operation
  async update(company: Company) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE company SET light_description = ?,complete_description = ?, siret_number = ?, phone_number = ?, street_number = ?, postcode = ?, city = ?, cedex_number = ?, user_id = ?, raison_social = ? WHERE id = ?",
      [
        company.light_description,
        company.complete_description,
        company.siret_number,
        company.phone_number,
        company.street_number,
        company.postcode,
        company.city,
        company.cedex_number,
        company.user_id,
        company.raison_social,
        company.id,
      ],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing category from the "category" table
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM company WHERE id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new CompanyRepository();
