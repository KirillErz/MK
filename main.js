const kirill = {
    name: 'kirill',
    hp:1,
    img:'',
};

const julia = {
    name:'',
    hp:1,
    img:'',
};

const weapon = [];


function attack() {
    console.log(kirill.name + 'Fight...');
}

function createPlayer(player, namePlayer, hp) {

    let player1 = document.createElement('div');
    player1.className = "player1";
    let progressbar = document.createElement('div');
    progressbar.className = "progressbar";
    player1.append(progressbar);
    let life = document.createElement('div');
    life.className = "life";
    progressbar.append(life);
    let name = document.createElement('div');
    name.className = "name";
    name.innerHTML = namePlayer;
    progressbar.append(name);
    let character = document.createElement('div');
    character.className = "character";
    player1.append(character);
    character.innerHTML = '<img src="http://reactmarathon-api.herokuapp.com/assets/scorpion.gif" />';

    document.querySelector('.arenas').appendChild(player1);
    
};

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);