let arenas = document.querySelector('.arenas');
const randomButton  =  document.querySelector('.button');

const kirill = {
    name: 'kirill',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    player: 1,
    attack: (name) =>  {
        console.log(name + ' ' + 'Fight...');
    }
};

const julia = {
    name:'julia',
    hp:100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    player: 2,
    attack: (name) =>  {
        console.log(name + ' ' + 'Fight...');
    }
};

const weapon = [];

const createElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    
    return $tag;
}

function createPlayer(playerObj) {

    let player = createElement('div', 'player' + playerObj.player);
    let progressbar = createElement('div', 'progressbar');
    let life = createElement('div', 'life');
    let name = createElement('div', 'name');
    let character = createElement('div', 'character');
    let img = createElement('img');

    img.src = playerObj.img;
    name.innerText = playerObj.name;
    life.style.width  = playerObj.hp + '%';




    progressbar.appendChild(life);
    progressbar.appendChild(name);

    character.appendChild(img);

    player.appendChild(character);
    player.appendChild(progressbar);

    return player;
};

const playerLose = (name) => {
    const loseTitle = createElement('div','loseTitle');
    loseTitle.innerText = name + ' LOX'
    return loseTitle;
}

function changeHP(player) {
    let hp = document.querySelector('.player' + player.player + ' .life');
    const random = Math.ceil(Math.random() * 20);
    player.hp -= random;
    hp.style.width = player.hp + '%';
    console.log(hp.style.width, player.hp);
    if(player.hp <= 0) {
        arenas.appendChild(playerLose(player.name))
        player.hp = 0;
    }
}

randomButton.addEventListener('click', () => {
    changeHP(kirill);
    changeHP(julia);
})

    arenas.appendChild(createPlayer(kirill));
    arenas.appendChild(createPlayer(julia));