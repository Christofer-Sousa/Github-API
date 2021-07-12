let form = document.getElementById("myForm")

form.addEventListener("submit", function(e){
    e.preventDefault()

    let search = document.getElementById("search").value;

    //console.log(search)
    let originalName = search.split(" ").join("")//Remove space

    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {

            document.getElementById("content").innerHTML = `

            <img class="shadow-lg p-3 mb-5 bg-white rounded" src="${data.avatar_url}">
            <h1 id="name">${data.name}</h1>
            <h3 id="bioUser">"${data.bio}"</h3>
            
            
            <div class="container" id="list">
                <h4>Followers: ${data.followers}</h4>
                <h4>Following: ${data.following}</h4>
                <h4>Repositories: ${data.public_repos}</h4>
            </div>
            
            `   
        })

        
})