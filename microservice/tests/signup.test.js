const request = require("supertest");
const app = require("../src");

let cookie;
beforeAll(async () => {
  const res = await request(app).post("/signup").send({
    username: "Tyson",
    password: "Yemen",
    confirmation: "Yemen",
  });

  cookie = res.headers["set-cookie"];
});

afterAll(async () => {
  await request(app).delete("/delete").set("Cookie", cookie);
});

describe("signup validations", () => {
  it("confirmation !== password", async () => {
    const res = await request(app).post("/signup").send({
      username: "Tyson",
      password: "Yemen",
      confirmation: "yemen",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  it("already registered", async () => {
    const res = await request(app).post("/signup").send({
      username: "Tyson",
      password: "Yemen",
      confirmation: "Yemen",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });
});
