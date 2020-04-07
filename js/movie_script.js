// Initiate Servers

let no_of_servers = 3;

for (let s = 1; s <= no_of_servers; s++) {
    $('.view .servers .server ul').append(`
        <li>
            <a href="#" class="py-1 px-3 border_radius mx-1">سيرفر ` + s + `</a>
        </li>
    `)
}

$('.view .servers .server ul li:first a').addClass('active-server');

$(function () {

    // Handle carousel responsive

    var width, col;

    if ($(window).width() >= 576 && $(window).width() <= 768) {
        width = 2;
        col = 6;
    } else if ($(window).width() <= 575.98) {
        width = 1;
        col = 12;
    } else {
        width = 4;
        col = 3;
    }

    posters = ['al_mamar.png', 'el_kenz.png', 'avengers_endgame.png', 'toy_story_four.png', 'al_mamar.png', 'el_kenz.png', 'avengers_endgame.png', 'toy_story_four.png'];

    // Initiate Carousel

    let n = 0;

    for (let i = 0; i < Math.ceil(posters.length / width); i++) {

        $('.carousel .carousel-inner').append(`
                <div class = "carousel-item">
                    <div class = "row">
                        
            `)

        for (let j = n; j < n + width; j++) {
            $('.carousel-item:last .row').append(`
                    <section  class = "col-` + col + ` d-flex justify-content-center align-items-center">
                        <a href="#" class="w-sm-100 h-100">
                            <img class = "w-100 h-100 border_radius" src = "img/` + posters[j] + `" alt = "` + j + ` slide" >
                        </a>
                    </section>
                `)
        }

        n += width;

        $('.carousel .carousel-inner').append(`
                    </div>
                </div>
            `);
    }

    $('.carousel-item:first').addClass('active');

})