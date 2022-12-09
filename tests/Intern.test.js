const Intern = require("../lib/Intern");


// Intern has getSchool, getRole. Construct school using constructor

test("Can construct school using constructor", () => {
  const testData = "UCI";
  const newInfo = new Intern("Foo", 1, "sample@sample.com", testData);
  expect(newInfo.school).toBe(testData);
});

// getrole

test("getRole() will return Intern", () =>{
  const testData = "Intern";
  const newInfo = new Intern("Foo", 1, "sample@sample.com", "UCI");
  expect (newInfo.getRole()).toBe(testData);
});

// getSchool

test("You can get school using getSchool()", () => {
  const testData = "UCI";
  const newInfo = new Intern("Foo", 1, "sample@sample.com", testData);
  expect(newInfo.getSchool()).toBe(testData);

});