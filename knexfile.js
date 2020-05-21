// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || {
  database: 'angular-node',
  user:     'postgres',
  password: '0n0mat0p0eia'
};
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/disciplines.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  }

};
