// Creting team using const generateTeam and function to dynamically create.
const generateTeam = team => {

    // create the manager html using template literals, // a tag so email is clickable//
  

    const generateManager = manager => {
        return `
        <div class="card card-employee">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title">${manager.getRole()}</h3>
        </div>
        <div class="card employee-body">
            <ul class="list-group">
                <li class="list-group-employee">ID: ${manager.getId()}</li>
                <li class="list-group-employee">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-employee">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };
    // engineer section html

    const generateEngineer = engineer => {
        return `
        <div class="card card-employee">
    <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card employee-body">
        <ul class="list-group">
            <li class="list-group-employee">ID: ${engineer.getId()}</li>
            <li class="list-group-employee">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-employee">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };


    // create for interns
    const generateIntern = intern => {
        return `
        <div class="card card-employee">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="card employee-body">
        <ul class="list-group">
            <li class="list-group-employee">ID: ${intern.getId()}</li>
            <li class="list-group-employee">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-employee">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };
    
    // make const html to hold array for Manager, Engineer, and Intern. Using const X.push to team, and filter team by Manager, Engineer, Intern. Return and join at the end.


    const html = [];

    html.push(team
        .filter(newEmployee => newEmployee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(newEmployee => newEmployee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(newEmployee => newEmployee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// module.export to generate page. Rememeber to use team function
module.exports = team => {

       return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};