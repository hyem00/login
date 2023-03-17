"use strict";

//home.ctrl.js 의 userStorge를 받아온거임 (컨트롤러 안에 데이터는 모델의 유저스토리지에서 받아옴)
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, pwd } = UserStorage.getUserInfo(body.id);
    if (id) {
      if (id === body.id && pwd === body.pwd) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호 틀림" };
    }
    return { success: false, msg: "아이디가 존재하지 않음" };
  }
}

module.exports = User;
