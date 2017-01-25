const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Phuong',
      room: 'Trang'
    }, {
      id: '2',
      name: 'Phuong Dy',
      room: 'Trang Thao'
    }, {
      id: '3',
      name: 'Mai Phuong',
      room: 'Trang Thao'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Phuong',
      room: 'Trang'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '2';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '21';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    var userId = '10';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for Trang Thao', () => {
    var userList = users.getUserList('Trang Thao');

    expect(userList).toEqual(['Phuong Dy', 'Mai Phuong']);
  });

  it('should return names for Trang', () => {
    var userList = users.getUserList('Trang');

    expect(userList).toEqual(['Phuong']);
  });
});
