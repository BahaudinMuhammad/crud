import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define("users", {
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  nominal: DataTypes.INTEGER,
});

export default User;

(async () => {
  await db.sync();
})();
