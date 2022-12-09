// In addition to Employee's properties and methods, Engineer will also have the following:

// github—GitHub username

// getGithub()

// getRole()—overridden to return 'Engineer'

const Engineer = require("../lib/Engineer");

// github username via constructor

test("You can set up Github account using constructor", () => {
  const testData = "GitHubUser";
  const newInfo = new Engineer("Foo", 1, "sample@sample.com", testData);
});

test("getRole() will return Engineer", () => {
  const testData = "Engineer";
  const newInfo = new Engineer("Foo", 1, "sample@sample.com", "GitHubUser");
  expect(newInfo.getRole()).toBe(testData);
});