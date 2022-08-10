const createError = require("http-errors");

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
  const { body } = req;
  //회원가입
  if (typeof body.nickname !== "string") {
    return next(createError(422, "입력 오류"));
  }
  const newUser = {
    id: user.length + 1,
    nickname: body.nickname,
    password: body.password,
  };
  user.push(newUser);
  res.status(201).json(newUser);
};
