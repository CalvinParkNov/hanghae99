const request = require("supertest");
const app = require("./app");

describe("Testing API ", () => {
  it("GET /api/", () => {
    return request(app)
      .get("/api/post")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              title: expect.any(String),
              nickname: expect.any(String),
            }),
          ])
        );
      });
  });

  it("GET /api/user => 회원가져오기", () => {
    return request(app)
      .get("/api/user")
      .expect("Content-type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              nickname: expect.any(String),
              password: expect.any(String),
            }),
          ])
        );
      });
  });

  it("POST /api/user -> 회원가입", () => {
    return request(app)
      .post("/api/user")
      .send({
        nickname: "닉네입니다.",
        password: "aB1!",
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            nickname: expect.any(String),
            password: expect.any(String),
          })
        );
      });
  });
  it("POST /api/user -> 회원가입 닉네임이 string타입이 아닐경우", () => {
    return request(app)
      .post("/api/user")
      .send({
        nickname: 123124,
        password: "비밀번호 입니다.",
      })
      .expect(422);
  });
  it("POST /api/user -> 회원가입 비밀번호가 대소문자 특수문자 숫자가 아닐경우", () => {
    return request(app)
      .post("/api/user")
      .send({
        nickname: "닉네임입니다.",
        password: "123123",
      })
      .expect(422);
  });
});
