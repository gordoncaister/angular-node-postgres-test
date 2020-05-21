// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || {
  database: 'angular-node',
  user:     'postgres',
  password: '0n0mat0p0eia'
};
module.exports = {

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
