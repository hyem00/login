//프론트 화면
"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pwd = document.querySelector("#pwd");
const confirmPwd = document.querySelector("#confirmPwd");
const registerBtn = document.querySelector("#register");

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) return alert("아이디를 입력해주세요");
  if (pwd.value !== confirmPwd.value) {
    return alert("비밀번호가 같지 않습니다.");
  }
  const req = {
    id: id.value,
    name: name.value,
    pwd: pwd.value,
    confirmPwd: confirmPwd.value,
  };
  console.log(req);
  fetch("/register", {
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
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입중 에러 발생");
    });
}
