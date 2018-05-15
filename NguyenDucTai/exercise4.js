/* getUsers get list users, return an arrays of Ids. Promise function delay 2s
getUserName(userId) get user name by uerId. Promise function delay 2s.
main() get user names*/
// Object test in javascript.
function User(id, name) {
  this.id = id;
  this.name = name;
}

User.prototype.get_name = function() {
  return this.name;
};
User.prototype.get_id = function() {
  return this.id;
}

User.prototype.check_id = function(id) {
  return this.id == id;
};
//make data
function creatUser(data) {
  var userData = data.split(':')
  return new User(userData[0], userData[1]);
}

var arrData = new Array();
arrData.push(creatUser('001:captain america'));
arrData.push(creatUser('002:iron man'));
arrData.push(creatUser('003:hulk'));
arrData.push(creatUser('004:black panther'));
arrData.push(creatUser('005:thor'));
arrData.push(creatUser('006:loki'));
arrData.push(creatUser('007:doctor strange'));
arrData.push(creatUser('008:vision'));
arrData.push(creatUser('009:ant main'));
arrData.push(creatUser('010:black widow'));
arrData.push(creatUser('011:thanos'));
arrData.push(creatUser('012:spider man'));
arrData.push(creatUser('013:nick fury'));
//promise
function getUsers() {
  return new Promise(function(resolve, reject) {
    var arrId = new Array();
    setTimeout(function() {
      arrData.forEach(function(user) {
        arrId.push(user.get_id());
      })
      resolve(arrId);
    }, 2000);
  });
}

function getUserName(userId) {
  return new Promise(function(resolve, reject) {
    var users = 'No user has id: ' + userId
    setTimeout(function() {
      arrData.forEach(function(user) {
        if (userId == user.get_id())
          users = 'user name: ' + user.get_name() + ' user id: ' + user.get_id();
      })
      resolve(users);
    }, 2000);
  });
}

function main() {
  return new Promise(function(resolve, reject) {
    var arrName = new Array();
    arrData.forEach(function(user) {
      arrName.push(user.get_name());
    })
    resolve(arrName);
  });
}

function id() {
    return new Promise(function(resolve, reject) {
      resolve('004');
    });
}

//Test
getUsers().then(function(result) {
  console.log(result);
})

getUserName('003').then(function(result) {
  console.log(result);
})

main().then(function(result) {
  console.log(result);
})
// Note: kết quả trả về sau mỗi promise sẽ dùng cho then sau, kết quả trả về của
// then trước là promise cũng sẽ được sử dụng cho then sau
id().then(function(result) {
  return getUserName(result);
}).then(function(result) {
    console.log(result);
})
