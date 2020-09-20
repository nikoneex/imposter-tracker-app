const imposters = [
    { name: 'red', },
    { name: 'blue', },
    { name: 'green', },
    { name: 'pink', },
    { name: 'orange', },
    { name: 'yellow', },
    { name: 'black', },
    { name: 'white', },
    { name: 'purple', },
    { name: 'brown', },
    { name: 'cyan', },
    { name: 'lime', },
]

$('.activating.element')
  .popup()
;

function renderCard(imposter) {
    $('#container').append(`
    <div id="${imposter.name}-imposter" class="ui card">
    <div class="ui image imposter">
        <img class="crop" src="/images/${imposter.name}.png">
    </div>
    <div class="content">
        ${imposter.name}
    </div>
</div>
    `)
}

//reset boxes
$('#reset').click(function () {
    $('#container').empty();
    init();
})


function init() {
    for (i = 0; i < imposters.length; i++) {
        renderCard(imposters[i]);
    }
    $('.imposter').click(function () {
        $(this).addClass('dead');
        $(this).dimmer('show');
    })
    $('.content').click(function () {
        var name = $(this).text();
        name = name.replace(/[_\W]+/g, "");
        $(this).addClass('animate__animated animate__tada')
        $(this).css('color', 'red')
        $(this).text('?? ' + name + ' ??')
    })
}

init();