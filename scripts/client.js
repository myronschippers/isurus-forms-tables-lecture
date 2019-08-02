console.log('FORMS and TABLES!!!');

// Fantastic Creatures List
const fantasticCreatures = [
    {
        name: 'Niffler',
        magicAbility: 'Finding treasure',
        dangerLevel: 1,
        color: 'Black',
    },
    {
        name: 'Murtlap',
        magicAbility: 'Its tentacles, when pickled, can be made into healing solutions or consumed to promote resistance to curses and jinxes',
        dangerLevel: 3,
        color: 'Peach',
    },
    {
        name: 'Occamys',
        magicAbility: 'Can grow to vast lengths. Produces silver eggs',
        dangerLevel: 7,
        color: 'Blue, Green',
    },
    {
        name: 'Thunderbird',
        magicAbility: 'Senses danger and creates storms as it flies',
        dangerLevel: 1,
        color: 'Gold, White',
    },
    {
        name: 'Bowtruckles',
        magicAbility: 'Natural camouflage',
        dangerLevel: 2,
        color: 'Green',
    },
    {
        name: 'Demiguise',
        magicAbility: 'Can turn invisible when threatened, and its pelt can be spun into Invisibility Cloaks',
        dangerLevel: 1,
        color: 'Silver',
    },
];

$(document).ready(onReady);

function onReady() {
    console.log('in onReady');
    // render a table with the `fantasticCreatures` data
    render();
    // $('.js-form-creature').on('submit', onSubmitAddCreature);
    $('.js-btn-creature').on('click', onClickAddCreature);
}

// function onSubmitAddCreature(event) {
//     event.preventDefault();

//     const formArray = $(this).serializeArray();
//     console.table(formArray);
//     const newCreature = {};

//     for (let field of formArray) {
//         const objectKey = field.name;
//         const objectValue = field.value;
//         // newCreature.name = 'Dragon';
//         newCreature[objectKey] = objectValue;
//     }

//     console.log(newCreature);
//     fantasticCreatures.push(newCreature);
//     render();
// }

function onClickAddCreature() {
    const newCreature = {
        name: $('.js-input-name').val(),
        magicAbility: $('.js-input-magic').val(),
        dangerLevel: parseInt($('.js-input-danger').val()),
        color: $('.js-input-color').val(),
    }
    console.log(newCreature);
    // $('.js-demo').append(`<div>${JSON.stringify(newCreature)}</div>`)
    fantasticCreatures.push(newCreature);
    render();

}

function render() {
    console.log('render');
    const tableElement = $('.js-table-data');

    tableElement.empty();
    for (let i = 0; i < fantasticCreatures.length; i++) {
        const creature = fantasticCreatures[i];

        tableElement.append(`<tr>
            <td>${creature.name}</td>
            <td>${creature.magicAbility}</td>
            <td>${creature.dangerLevel}</td>
            <td>${creature.color}</td>
        </tr>`);
    }
}

