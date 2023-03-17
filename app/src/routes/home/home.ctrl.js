"use strict";

//프론트에서 넘겨준 아이디 정보가 맞는지 확인하기 위한 기존 아디
const users = {
  id: ["hyem", "ddd", "aaa"],
  pwd: ["1111", "2222", "3333"],
};

const output = {
  home: (req, res) => {
    res.render("./index");
  },

  login: (req, res) => {
    res.render("./login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const pwd = req.body.pwd;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pwd[idx] === pwd) {
        return res.json({ success: true });
      }
    }
    return res.json({ success: false, msg: "로그인 실패" });
  },
};

module.exports = {
  output,
  process,
};
