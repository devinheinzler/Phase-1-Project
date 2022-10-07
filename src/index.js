const gamesUrl = `http://localhost:3000/games`


let clickedGame;


const hoursPlayedForm = document.getElementById('hours-played-form')
hoursPlayedForm.onsubmit = (event) => {
    event.preventDefault()
    const hours = parseInt(document.getElementById('hours-amount').value)
    clickedGame.hours = hours
    renderGameDetails(clickedGame)
    hoursPlayedForm.reset()
    document.getElementById('hours-btn').addEventListener('mouseenter',e =>{
        e.target.style.backgroundColor = 'purple'
    })
    document.getElementById('hours-btn').addEventListener('mouseleave',e => {
        e.target.style.backgroundColor = 'transparent'
    })
}



document.getElementById('btn').addEventListener('mouseenter',e =>{
    e.target.style.backgroundColor = 'purple'
})
document.getElementById('btn').addEventListener('mouseleave',e => {
    e.target.style.backgroundColor = 'white'
})

const newGameForm = document.getElementById('new-game-form')
newGameForm.onsubmit = (event) => {
    event.preventDefault()
    let newGame = {
        name: event.target["game-name-input"].value,
        image: event.target["game-image-input"].value,
        dev: event.target["game-dev-input"].value,
        genre: event.target["game-genre-input"].value,
        platform: event.target["user-platform-input"].value,
        hours: 0,
    }
    renderGame(newGame)
}

function fetchGames() {
    fetch(gamesUrl)
    .then(response => response.json())
    .then(gameData => {
        // games = gameData
        // clickedGame = games[0]
        renderAllGames(gameData)
        renderGameDetails(gameData[0])
    })
}

fetchGames()

function renderAllGames(games) {
    games.forEach(game => renderGame(game))
}

function renderGame(game) {
    const nav = document.getElementById('game-list')
    const h5 = document.createElement('h5')
    h5.textContent = game.name

    h5.addEventListener('mouseenter',e =>{
        e.target.style.backgroundColor = 'purple'
    })
    h5.addEventListener('mouseleave',e => {
        e.target.style.backgroundColor = 'transparent'
    })

    
    h5.addEventListener('click', () => renderGameDetails(game))
    
    
    nav.appendChild(h5)
    }



function renderGameDetails(game) {
    
    const gameImage = document.getElementById('detail-image')
    gameImage.src = game.image
    
    const detail = document.getElementById('detail-title')
    detail.textContent = game.name
    
    const hoursPlayed = document.getElementById('hours-played')
    hoursPlayed.textContent = game.hours
    
    const gameGenre = document.getElementById('game-genre')
    gameGenre.textContent = game.genre
    
    const gameDev = document.getElementById('game-dev')
    gameDev.textContent = game.dev

    const userPlatform = document.getElementById('user-platform')
    userPlatform.textContent = game.platform
    
    clickedGame = game

}

// document.addEventListener("click", (e) => {
//     // if statement to get specific h5 elements (e.target.id)
//     switch(e.target.id) {

//         case "star wars":

//     }   
// })