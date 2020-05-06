const request = require("supertest");
const app = require("../src");

let cookie;
beforeAll(async () => {
  const res = await request(app).post("/signup").send({
    username: "hilbert",
    password: "strategize",
    confirmation: "strategize",
  });

  cookie = res.headers["set-cookie"];
});

afterAll(async () => {
  await request(app).delete("/delete").set("Cookie", cookie);
});

describe("login validations", () => {
  it("already logged in", async () => {
    const res = await request(app)
      .get("/login")
      .send({
        username: "Hilbert",
        password: "strategize",
      })
      .set("Cookie", cookie);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  it("wrong password", async () => {
    const res = await request(app).get("/login").send({
      username: "Hilbert",
      password: "strategize123",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("error");
  });

  it("username not registered", async () => {
    const res = await request(app).get("/login").send({
      username: "Alysson",
      password: "strategize",
    });

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("error");
  });
});
