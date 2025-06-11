import { DataSource, DataSourceOptions } from "typeorm";
import { UserEntity } from "src/users/entities/user.entity";
import { config } from "dotenv";
config()
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [UserEntity],
    migrations: ['dist/db/migrations/*{.ts, .js}'],
    logging: false,
    synchronize: false
}

const datasource = new DataSource(dataSourceOptions);

export default datasource;