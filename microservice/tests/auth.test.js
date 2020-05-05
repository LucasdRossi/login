const request = require("supertest");
const app = require("../src");

describe("signup, logout, login, delete", () => {
  let cookie;
  it("should create a user", async () => {
    const res = await request(app).post("/signup").send({
      username: "Malika",
      password: "Utah",
      confirmation: "Utah",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("success");
    cookie = res.headers["set-cookie"];
  });

  it("should logout the user", async () => {
    const res = await request(app).get("/logout").set("Cookie", cookie);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("success");
  });

  it("should login the user", async () => {
    const res = await request(app).get("/login").send({
      username: "Malika",
      attempt: "Utah",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("success");
    cookie = res.headers["set-cookie"];
  });

  it("should delete the user", async () => {
    const res = await request(app).delete("/delete").set("Cookie", cookie);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("success");
  });
});
