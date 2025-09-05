// script.js

document.addEventListener('DOMContentLoaded', () => {
    const characters = [
        {
            name: 'Luke Skywalker',
            image: 'img/luke-skywalker.jpg',
            description: 'A Jedi Knight and the son of Anakin Skywalker.'
        },
        {
            name: 'Darth Vader',
            image: 'img/darth-vader.jpg',
            description: 'The Sith Lord and former Jedi Knight, Anakin Skywalker.'
        },
        {
            name: 'Princess Leia',
            image: 'img/princess-leia.jpg',
            description: 'A leader of the Rebel Alliance and twin sister of Luke Skywalker.'
        },
        {
            name: 'Han Solo',
            image: 'img/han-solo.jpg',
            description: 'A smuggler and captain of the Millennium Falcon.'
        }
    ];

    const characterList = document.getElementById('character-list');

    characters.forEach(character => {
        const characterItem = document.createElement('div');
        characterItem.classList.add('character-item');

        const characterImage = document.createElement('img');
        characterImage.src = character.image;
        characterImage.alt = character.name;
        characterImage.classList.add('character-image');

        const characterName = document.createElement('h3');
        characterName.textContent = character.name;

        const characterDescription = document.createElement('p');
        characterDescription.textContent = character.description;

        characterItem.appendChild(characterImage);
        characterItem.appendChild(characterName);
        characterItem.appendChild(characterDescription);
        characterList.appendChild(characterItem);
    });
});