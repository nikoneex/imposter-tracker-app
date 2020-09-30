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

$('#submit').click(function () {
   changeNames();

   $('.ui.modal')
   .modal('hide')
   ;
})


function changeNames() {
    var color_red = $('#red-input').val()
    var color_blue = $('#blue-input').val()
    var color_green = $('#green-input').val()
    var color_pink = $('#pink-input').val()
    var color_orange = $('#orange-input').val()
    var color_yellow = $('#yellow-input').val()
    var color_black = $('#black-input').val()
    var color_white = $('#white-input').val()
    var color_purple = $('#purple-input').val()
    var color_brown = $('#brown-input').val()
    var color_cyan = $('#cyan-input').val()
    var color_lime = $('#lime-input').val()
    
    $('#red').text(color_red)
    $('#blue').text(color_blue)
    $('#green').text(color_green)
    $('#pink').text(color_pink)
    $('#orange').text(color_orange)
    $('#yellow').text(color_yellow)
    $('#black').text(color_black)
    $('#white').text(color_white)
    $('#purple').text(color_purple)
    $('#brown').text(color_brown)
    $('#cyan').text(color_cyan)
    $('#lime').text(color_lime)
    
}

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
        name = name.replace(/[&/\#,+()$~%.'":*?<>{}]/g, "");

        //toggle sus name
        if ($(this).data('sus') === true) {
            $(this).removeClass('animate__animated animate__tada');
            void this.offsetWidth;

            $(this).css('color', 'white')
            $(this).html('<span id="' + name + '">' + name + '</span>')
            $(this).data('sus', false)
            $(this).addClass('animate__animated animate__tada');
        } else {
            $(this).removeClass('animate__animated animate__tada');
            void this.offsetWidth;

            $(this).css('color', 'red')
            $(this).html('<span id="' + name + '">?? ' + name + ' ??</span>')
            console.log($(this).data('sus'))
            $(this).data('sus', true)
            console.log($(this).data('sus'))
            $(this).addClass('animate__animated animate__tada');
        }

    })

}

init();