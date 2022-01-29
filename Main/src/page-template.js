// This script is used for creating our HTML page

const fs = require('fs');

const teamMember = [
    {
      name: 'Zack',
      id: '1',
      email: 'zarse',
      officeNumber: '23',
      role: 'Manager'
    },
    {
      name: 'Mike',
      id: '2',
      email: 'mikkk',
      github: 'mikgit',
      role: 'Engineer'
    },
    {
      name: 'sar',
      id: '3',
      email: 'sara@',
      school: 'UT',
      role: 'Intern'
    }
];

// For every Class constructor in the 'teamMember' array we want to create a new card with that member's information
const cardHTML = teamMember.map(member => {
    // We change the last listed data parameter depending on the role of the employee
    switch(member.role){
        case 'Manager':
            return `<div class="card bg-primary m-2" style="width: 18rem;">
                <div class="card-body text-white">
                    <h2 class="card-title">${member.name}</h2>
                    <h3 class="card-subtitle">${member.role}</h3>
                </div>
                <ul class="list-group list-group-flush m-2 rounded">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item">Email: ${member.email}</li>
                    <li class="list-group-item">Office #: ${member.officeNumber}</li>
                </ul>
            </div>`;
        case 'Intern':
            return `<div class="card bg-primary m-2" style="width: 18rem;">
                <div class="card-body text-white">
                    <h2 class="card-title">${member.name}</h2>
                    <h3 class="card-subtitle">${member.role}</h3>
                </div>
                <ul class="list-group list-group-flush m-2 rounded">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item">Email: ${member.email}</li>
                    <li class="list-group-item">School: ${member.school}</li>
                </ul>
            </div>`;
        case 'Engineer':
            return `<div class="card bg-primary m-2" style="width: 18rem;">
                <div class="card-body text-white">
                    <h2 class="card-title">${member.name}</h2>
                    <h3 class="card-subtitle">${member.role}</h3>
                </div>
                <ul class="list-group list-group-flush m-2 rounded">
                    <li class="list-group-item">ID: ${member.id}</li>
                    <li class="list-group-item">Email: ${member.email}</li>
                    <li class="list-group-item">Github: ${member.github}</li>
                </ul>
            </div>`;
    }
}

)
// After the card HTMLs have been put into an array we want to turn this array into one string, so we can put that string into our HTML page
.join('');

const pageHTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link href="./dist/reset.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
        <link rel="stylesheet" href="./dist/style.css" />
        <title>Team Generator</title>
    </head>
    <body class="bg-light">
        <div class="jumbotron jumbotron-fluid bg-danger">
            <div class="container text-center">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="row justify-content-center">
        ${cardHTML}
        </div>
    </body>
</html>`;

function init(){
    fs.writeFileSync('index.html', pageHTML);
}

init();

// module.exports = pageHTML;