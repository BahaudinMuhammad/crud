import { Sequelize } from "sequelize";

const db = new Sequelize("wedding_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
