"use strict";

//home.ctrl.js 의 userStorge를 받아온거임 (컨트롤러 안에 데이터는 모델의 유저스토리지에서 받아옴)
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const client = this.body;
    const { id, pwd } = UserStorage.getUserInfo(client.id);
    if (id) {
      if (id === client.id && pwd === client.pwd) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호 틀림" };
    }
    return { success: false, msg: "아이디가 존재하지 않음" };
  }

  register() {
    const client = this.body;
    UserStorage.save(this.body);
  }
}

module.exports = User;
