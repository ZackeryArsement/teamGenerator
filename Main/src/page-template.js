// This script is used for creating our HTML string

const pageHTML = (cardHTML) => {
    return `<!DOCTYPE html>
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
    </html>`
};

module.exports = pageHTML;