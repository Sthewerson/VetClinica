import { Tutor } from "./entities/Tutor";
import { Pet } from "./entities/Pet";

export const ormconfig = {
  type: "sqlite",
  database: "database.sqlite",
  entities: [Tutor, Pet],
  migrations: ["src/migrations/*.ts"],
};
