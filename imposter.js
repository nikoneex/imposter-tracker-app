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

// instructions popup
$('.activating.element')
    .popup()
    ;


function renderCard(imposter) {
    $('#container').append(`
    <div id="${imposter.name}-imposter" class="ui card">
    <div class="ui image imposter">
        <img class="crop" src="/images/${imposter.name}.png">
    </div>
    <div class="content" data-sus="false">
        <span id="${imposter.name}">${imposter.name}</span>
    </div>
</div>
    `)
}

//reset boxes
$('#reset').click(function () {
    $('#container').empty();
    init();
})

// edit names
$('#edit-names').click(function () {
    $('.ui.modal')
        .modal('show')
        ;
})


function init() {
    for (i = 0; i < imposters.length; i++) {
        renderCard(imposters[i]);
    }
    $('.imposter').click(function () {
        $(this).addClass('dead');
        $(this).dimmer('show');
    })

    $('#red').text('neeks')
    $('#cyan').text('kevs')


    $('.content').click(function () {
        var name = $(this).text();
        name = name.replace(/[_\W]+/g, "");

        //toggle sus name
        if ($(this).data('sus') === true) {
            $(this).removeClass('animate__animated animate__tada');
            void this.offsetWidth;

            $(this).css('color', 'white')
            $(this).text(name)
            $(this).data('sus', false)
            $(this).addClass('animate__animated animate__tada');
        } else {
            $(this).removeClass('animate__animated animate__tada');
            void this.offsetWidth;

            $(this).css('color', 'red')
            $(this).text('?? ' + name + ' ??')
            console.log($(this).data('sus'))
            $(this).data('sus', true)
            console.log($(this).data('sus'))
            $(this).addClass('animate__animated animate__tada');
        }

    })
}

init();