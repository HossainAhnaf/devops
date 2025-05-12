module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'db',
      user: 'postgres',
      password: '9592',
      database: 'les_chat',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeders',
    },
  },
};
