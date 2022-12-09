const Employee = require("../lib/Employee");

// start employee test, write message for each. Employee, engineer, intern, will be returned as an object. 

// test("Employee test is being run", () => {
//   const Employee = new Employee();
//   expect(typeof(newEmployee)).toBe("object");
// });


test("Can create Employee info", () => {
  const newInfo = new Employee();
  expect(typeof(newInfo)).toBe("object");
});

// first test is name

test("You can create a name by using constructor", () => {
  const name = "John";
  const newInfo = new Employee(name);
  expect(newInfo.name).toBe(name);
});

// next test is asking for their id

test("You can set the id by using constructor", () => {
  const findValue = 1;
  const newInfo = new Employee("Foo", findValue);
  expect(newInfo.id).toBe(findValue);
});

// next question is asking for email

test("You can set the email by using constructor", () => {
  const findValue = "sample@sample.com";
  const newInfo = new Employee("Foo", 1, findValue);
  expect(newInfo.email).toBe(findValue);
});

// Ask for name

test("You can set the employee name by using constructor", () => {
  const findValue = "John";
  const newInfo = new Employee(findValue);
  expect(newInfo.getName()).toBe(findValue);
});

// next question is to get id

test("You can find id using getID()", () => {
  const findValue = 1;
  const newInfo = new Employee("Foo", findValue);
  expect(newInfo.getId()).toBe(findValue);
});

// Next question is to getEmail

test("You can get email using getEmail()", () => {
  const findValue = "sample@sample.com";
  const newInfo = new Employee("Foo", 1, findValue);
  expect(newInfo.getEmail()).toBe(findValue);
});

// Next is to getRole

test("You can get role of employee using getRole()", () => {
  const findValue = "Employee";
  const newInfo = new Employee("Foo", 1, "sample@sample.com");
  expect(newInfo.getRole()).toBe(findValue);
});