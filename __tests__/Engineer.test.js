const Engineer = require("../lib/Engineer");

test("constructor adds github", () => {
  const userTest = "githubaccount";
  const e = new Engineer("Dalton", 1, "example@nowhere.com", userTest);
  expect(e.github).toBe(userTest);
});

test("function returns role", () => {
  const roleTest = "Engineer";
  const e = new Engineer("Dalton", 1, "example@nowhere.com", "githubaccount");
  expect(e.getRole()).toBe(roleTest);
});

test("function returns github", () => {
  const userTest = "githubaccount";
  const e = new Engineer("Dalton", 1, "example@nowhere.com", userTest);
  expect(e.getGithub()).toBe(userTest);
});
