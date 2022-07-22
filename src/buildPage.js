function managerCard(member){
    return`
<div class="col-sm">
    <div class="card mb-5" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h3 class="card-title text-white">${member.getName()}</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-primary h4">Manager</li>
                <li class="list-group-item"><p class="card-text">ID: ${member.getId()}</p></li>
                <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}" class="card-link">${member.getEmail()}</a></li>
                <li class="list-group-item"><p class="card-text">Office Number: ${member.getOfficeNumber()}</p></li>
            </ul>
        </div>
    </div>
</div>`
}

function engineerCard(member){
    return`
<div class="col-sm">
    <div class="card mb-5" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h3 class="card-title text-white">${member.getName()}</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-primary h4">Engineer</li>
                <li class="list-group-item"><p class="card-text">ID: ${member.getId()}</p></li>
                <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}" class="card-link">${member.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${member.getGithub()}" class="card-link" target="_blank">${member.getGithub()}</a></li>
            </ul>
        </div>
    </div>
</div>`
}

function internCard(member){
    return`          
<div class="col-sm">
    <div class="card mb-5" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h3 class="card-title text-white">${member.getName()}</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-primary h4">Intern</li>
                <li class="list-group-item"><p class="card-text">ID: ${member.getId()}</p></li>
                <li class="list-group-item">Email: <a href="mailto:${member.getEmail()}" class="card-link">${member.getEmail()}</a></li>
                <li class="list-group-item"><p class="card-text">School: ${member.getSchool()}</p></li>
            </ul>
        </div>
    </div>
  </div>
</div>`
}

function buildCards(data){
    var output = ''
    for(let i = 0; i < data.length ; i++){
        team = (data[i])
        console.log(data[i])
        let role = (data[i].getRole())
        console.log(role)
        if(role === 'Manager'){
            console.log('manCard')
            output += managerCard(team)
        }
        if(role === 'Engineer'){
            console.log("engCard")
            output += engineerCard(team)
        }
        if(role === 'Intern'){
            console.log('intCard')
            output += internCard(team)
        }
    }
    return output
}



function buildPage(data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid text-center bg-danger text-white">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${buildCards(data)}
            </div>
        </div>
    </body>
    </html>`
}

module.exports = buildPage;