const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Constructor sets office number", () => {
  const officeTest = 1;
  const e = new Manager("Dalton", 1, "example@nowhere.com", officeTest);
  expect(e.officeNumber).toBe(officeTest);
});

test("function returns manager", () => {
  const managerTest = "Manager";
  const e = new Manager("Dalton", 1, "example@nowhere.com", 1);
  expect(e.getRole()).toBe(managerTest);
});

test("office functions returns office number", () => {
  const officeTest = 100;
  const e = new Manager("Dalton", 1, "example@nowhere.com", officeTest);
  expect(e.getOfficeNumber()).toBe(officeTest);
});
