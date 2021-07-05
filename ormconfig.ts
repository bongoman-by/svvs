export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER_NAME,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [
    'dist/apps/api/src/**/*.entity.js', // where to find files entities when the script api:entities is run
  ],
  migrations: [
    'dist/apps/api/src/migrations/*.js', // where to find files migrations when the script api:migrations:run is run
  ],
  cli: {
    migrationsDir: 'dist/apps/api/src/migrations', // where to put files when the script api:migration:create is run
  },
};
