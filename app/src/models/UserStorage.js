"use strict";

class UserStorage {
  static #users = {
    // static 정적 변수로 선언 -> 다른 폴더에서 직접적으로 접근 가능
    //근데 사실 공개적인곳에서 변수에 직접적으로 접근하면 안되잖아 아디인디.. 그래서 은닉화 !! 를 해줄거임 그게 # 이거임 !
    id: ["hyem", "ddd", "aaa"],
    pwd: ["1111", "2222", "3333"],
    name: ["sdsd", "sdd", "qqq"],
  };

  //은닉화 해서 해야하는 과정 아래 두번째까지
  static getUsers(...fields) {
    //원하는것만 빼내려고
    const users = this.#users;
    //reduse : 배열로 반복을 만드는 메서드
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        //유저스에 필드라는 데이터가 존재하냐는 거임
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
