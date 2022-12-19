const Employee = require("../lib/Employee");

test("Employee funtion returns value", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name", () => {
  const name = "Dalton";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Sets employee id", () => {
  const idTest = 100;
  const e = new Employee("Dalton", idTest);
  expect(e.id).toBe(idTest);
});

test("Can set email", () => {
  const emailTest = "example@nowhere.com";
  const e = new Employee("Dalton", 1, emailTest);
  expect(e.email).toBe(emailTest);
});

test("Can get name with function", () => {
  const name = "Dalton";
  const e = new Employee(name);
  expect(e.getName()).toBe(name);
});

test("Can get id with function", () => {
  const idTest = 100;
  const e = new Employee("Dalton", idTest);
  expect(e.getId()).toBe(idTest);
});

test("Can get email with function", () => {
  const emailTest = "example@nowhere.com";
  const e = new Employee("Dalton", 1, emailTest);
  expect(e.getEmail()).toBe(emailTest);
});

test("function returns job title", () => {
  const jobTest = "Employee";
  const e = new Employee("Dalton", 1, "test@test.com");
  expect(e.getRole()).toBe(jobTest);
});
