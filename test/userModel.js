const User = require('../server/models/userModel');
const knexConfig = require('../server/database/knexfile.js');
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development']);

describe('UserModel', function() {
  const tableName = 'users';
  const userName = 'test';
  const password = 'test';
  const firstName = 'first';
  const lastName = 'last';

  before(function() {
    return knex(tableName).truncate();
  });

  afterEach(function() {
    return knex(tableName).truncate();
  });

  describe('User Creation', function() {
    beforeEach(function() {
      return User.forge({
          name: userName,
          password: 'test',
          firstName: firstName,
          lastName: lastName,
        }).save()
    })

    it('Should create a user with the correct attributes', function() {
      return knex(tableName).first().where('name', userName)
      .then(user => {
        expect(user.name).to.equal(userName);
        expect(user.first_name).to.equal(firstName);
        expect(user.last_name).to.equal(lastName);
      });
    });

    it('Should use the fullName virtual to make a first and last name', function() {
      return User.forge({ name: userName }).fetch()
      .then(user => user.set('fullName', `${firstName} ${lastName}`).save())
      .then(() => knex(tableName).first().where('name', userName))
      .then(user => {
        expect(user.first_name).to.equal(firstName);
        expect(user.last_name).to.equal(lastName);
      });
    });

    it('Should hash a users password', function() {
      return knex(tableName).first().where('name', userName)
      .then(user => {
        expect(user.password).to.not.equal(password);
        expect(user.password).to.contain('$2a$10$');
      });
    });

    it('Should have a working password compare', function() {
      return User.forge({ name: userName }).fetch()
      .then(user => user.comparePassword(password));
    });
  });
});
