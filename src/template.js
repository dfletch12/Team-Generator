// create the team
const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class="card text-bg-primary card-style">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body text-bg-light">
                <ul class="list-group">
                    <li class="info">ID: ${manager.getId()}</li>
                    <li class="info">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="info">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <div class="card text-bg-primary card-style">
            <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body text-bg-light">
                <ul class="list-group">
                    <li class="info">ID: ${engineer.getId()}</li>
                    <li class="info">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="info">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card text-bg-primary card-style">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="card-body text-bg-light">
        <ul class="list-group">
            <li class="info">ID: ${intern.getId()}</li>
            <li class="info">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="info">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-5 mb-3 herobar">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="box col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};