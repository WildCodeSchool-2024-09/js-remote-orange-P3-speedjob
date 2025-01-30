import databaseClient from "../../../database/client";

import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";

type Result = ResultSetHeader;
type Rows = RowDataPacket[];

type Admin = {
  id: number;
  alias: string;
  function: string;
};

class AdminRepository {
  // The C of CRUD - Create operation
  async create(admin: Omit<Admin, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO admin (alias, function) VALUES (?, ?)",
      [admin.alias, admin.function],
    );
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM admin WHERE id = ?",
      [id],
    );
    return rows[0] as Admin;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM admin");
    return rows as Admin[];
  }

  // The U of CRUD - Update operation
  async update(admin: Admin) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE admin SET alias = ?, function = ? WHERE id = ?",
      [admin.alias, admin.function, admin.id],
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM admin WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new AdminRepository();
