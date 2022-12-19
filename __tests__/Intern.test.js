const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const schoolTest = "Lipscomb";
  const e = new Intern("Dalton", 1, "example@nowhere.com", schoolTest);
  expect(e.school).toBe(schoolTest);
});

test("role function returns role", () => {
  const roleTest = "Intern";
  const e = new Intern("Dalton", 1, "example@nowhere.com", "Lipscomb");
  expect(e.getRole()).toBe(roleTest);
});

test("function returs school", () => {
  const schoolTest = "Lipscomb";
  const e = new Intern("Dalton", 1, "example@nowhere.com", schoolTest);
  expect(e.getSchool()).toBe(schoolTest);
});
