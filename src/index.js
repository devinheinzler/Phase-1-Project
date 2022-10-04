const gamesUrl = `http://localhost:3000/games`
const nav = document.getElementById('game-list')

function fetchGames() {
    fetch(gamesUrl)
    .then(response => response.json())
    .then(gameData => renderAllGames(gameData))
}

fetchGames()

function renderAllGames(gameData) {
    gameData.forEach(game => renderGame(game))
}

function renderGame(game) {
    const h5 = document.createElement('h5')
    h5.textContent = game.name
    nav.appendChild(h5)
}

function renderGameData() {
    
}