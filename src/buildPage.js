function managerCard(member){
    return`
<div class="col-sm">
    <div class="card mb-5" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h3 class="card-title text-white">Name</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-primary h4">Manager</li>
                <li class="list-group-item"><p class="card-text">ID</p></li>
                <li class="list-group-item">Email: <a href="mailto:sample@sample.com" class="card-link">sample@sample.com</a></li>
                <li class="list-group-item"><p class="card-text">Office Number</p></li>
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
            <h3 class="card-title text-white">Name</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-primary h4">Engineer</li>
                <li class="list-group-item"><p class="card-text">ID</p></li>
                <li class="list-group-item">Email: <a href="mailto:sample@sample.com" class="card-link">sample@sample.com</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/username" class="card-link" target="_blank">username</a></li>
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
            <h3 class="card-title text-white">Name</h3>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-primary h4">Manager</li>
                <li class="list-group-item"><p class="card-text">ID</p></li>
                <li class="list-group-item">Email: <a href="mailto:sample@sample.com" class="card-link">sample@sample.com</a></li>
                <li class="list-group-item"><p class="card-text">School</p></li>
            </ul>
        </div>
    </div>
  </div>
</div>`
}

function buildCards(data){

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
                ${buildCards(data)}
            </div>
        </div>
    </body>
    </html>`
}

module.exports = buildPage;