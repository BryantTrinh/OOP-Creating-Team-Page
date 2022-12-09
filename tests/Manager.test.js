// do require for manager and employee?

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// asking for office number, role

test("You can set the office number with constructor", () => {
  const testData = 1;
  const newInfo = new Manager("Foo", 1, "sample@sample.com", testData);
  expect(newInfo.officeNumber).toBe(testData);
});

// getRole
test("getRole() will return manager", () => {
  const testData = "Manager";
  const newInfo = new Manager("Foo", 1, "sample@sample.com", 2);
  expect(newInfo.getRole()).toBe(testData);
});

// get office number

test("You can get the office number using getOffice()", () => {
  const testData = 1;
  const newInfo = new Manager("Foo", 1, "sample@sample.com", testData);
  expect(newInfo.getOfficeNumber()).toBe(testData);
});