// Define DB connections for different environments
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/movies_and_directors_dev'
  },
  test: {},
  production: {
    client: 'pg',
    connection: 'postgres://potunkhdgajdbb:30b047c2327445987d76d816ff1cee35299e875a4a1a006f77f9017b4cd185f9@ec2-54-243-187-30.compute-1.amazonaws.com:5432/da6p3o4uihmg51'
  }
}
