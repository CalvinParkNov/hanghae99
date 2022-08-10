const createError = require("http-errors");

//회원 데이터 배열
const user = [
  {
    id: 1,
    nickname: "닉네임입니다.",
    password: "비밀번호입니다.",
  },
];

exports.getAllUser = (req, res, next) => {
  res.json(user);
};

exports.createAccount = (req, res, next) => {
  const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{3,}$/;

  const { body } = req;
  //회원가입 string이 아닐경우 입력오류를 전달
  if (typeof body.nickname !== "string") {
    return next(createError(422, "입력 오류"));
  }
  if (!reg.test(body.password)) {
    return next(createError(422, "입력오류"));
  }

  const newUser = {
    id: user.length + 1,
    nickname: body.nickname,
    password: body.password,
  };
  user.push(newUser);
  res.status(201).json(newUser);
};
