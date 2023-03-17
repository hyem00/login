//프론트 화면
"use strict";

const id = document.querySelector("#id");
const pwd = document.querySelector("#password");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pwd: pwd.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    // .then((res) => console.log(res)); 아랫줄이랑 같은말 (생략)
    //이렇게 then을 두번하는 이유는 res.json()의 반환형태가 promise 인데 이걸 읽으려면 이렇게 해야함
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인중 에러 발생");
    });
}
