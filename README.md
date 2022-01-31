# teamGenerator
Title: Team Generator \
Developer: Zackery Arsement \
Deployment Date:  1/31/2022 \
For:  UT JavaScript Coding Bootcamp \
Published: GitHub <https://github.com/ZackeryArsement/teamGenerator> \
Built with: HTML, Javascript, Bootstrap, Jquery, Node.js

# Table of Contents

-[Summary](#summary)
-[Development](#development)
-[Test](#test)
-[Resources](#resources)

# Summary: 

![Generated HTML](https://github.com/ZackeryArsement/teamGenerator/blob/main/Assets/images/teamGeneratorPage.png)

![Example of Prompts](https://github.com/ZackeryArsement/teamGenerator/blob/main/Assets/images/teamGeneratorTerminal.png)

The Team Generator allows a user to create a web page that displays a list of team members on their work force! \
The user is prompted with a list of questions regarding the information of each team member. \
Once the user decides they are done adding team members then an HTML is created and the user and open their newly created webpage. \
If you select a team members email address then the default email method will open up for the user. \
If you select the github username of an engineer then the user is brought to that github webpage.

![Gif of Use](https://github.com/ZackeryArsement/teamGenerator/blob/main/Assets/images/teamGenerator.gif)

-[Walkthrough of Software Use](https://watch.screencastify.com/v/K6KZiN9TaikPg7X2CTBq)

# Development:
The Team Generator Application works by providing the user a list of prompts in order to attach information to a newly created Class construct. This Class construct is then pushed into an array of team members. The prompts will change depending on the role of the team member being created, and the user can select the role of a new team member once they complete filling out the information of a team member. The first team member created will always be the manager. Once the user tells the prompt that they would no longer like to add any more team members then the software creates info cards for each team member. These cards are created by mapping through the team member array and pulling the information assigned to each Class construct into a card HTML string. Each card HTML string created is then joined together to create a single HTML string. This single HTML string is then put into a default browser HTML string. Finally 'fs' is used to create a new index.html file using this newly created browser HTML.

The javascript in this code is modularized to allow for more effective use. Each class is within its own javascript. The HTML generation is in its own javascript. Lastly the index.js file holds the prompt functions and calls for the page generation when needed.

# Test:

This project uses test to ensure that the javascript runs correctly. There are 4 test files, one for each Class: Employee, Manager, Engineer, and Intern. Within these 4 files there are 10 methods being validated and 4 test to ensure that new class constructors contain the correct parameters.

![Error Test](https://github.com/ZackeryArsement/teamGenerator/blob/main/Assets/images/teamGeneratorTest.png)

-[Walkthrough of Test](https://watch.screencastify.com/v/0E0S1uur7yq5QagP5QGl)

# Resources

I received assistance and worked with:

Michael Klein \
<https://github.com/inklein1997/Team-Profile-Generator>