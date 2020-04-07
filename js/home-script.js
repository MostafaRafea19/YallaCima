$(function () {

    /* Popular movies carousel handle */

    popular_movies = [{
            name: 'Joker',
            poster: 'joker.png',
            rating: 8.9,
            isTranslated: true,
        },
        {
            name: 'Abominable',
            poster: 'abominable.png',
            rating: 8.2,
            isTranslated: true,
        }, {
            name: 'Alita',
            poster: 'alita_battle_angel.png',
            rating: 9,
            isTranslated: true,
        }, {
            name: 'الفيل الأزرق 2',
            poster: 'blue_elephant.png',
            rating: 8.7,
            isTranslated: false
        },
        {
            name: 'Joker',
            poster: 'joker.png',
            rating: 8.9,
            isTranslated: true,
        },
        {
            name: 'Abominable',
            poster: 'abominable.png',
            rating: 8.2,
            isTranslated: true,
        }, {
            name: 'Alita',
            poster: 'alita_battle_angel.png',
            rating: 9,
            isTranslated: true,
        }, {
            name: 'الفيل الأزرق 2',
            poster: 'blue_elephant.png',
            rating: 8.7,
            isTranslated: false
        },
    ]

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

    // Initiate the carousel

    let n = 0;

    for (let i = 0; i < Math.ceil(popular_movies.length / width); i++) {

        $('.carousel .carousel-inner').append(`
                <div class = "carousel-item">
                    <section class = "row justify-content-center align-items-center">
            `)

        for (let j = n; j < n + width; j++) {
            $('.carousel-item:last .row').append(`
                    <section class="col-` + col + ` d-flex flex-column justify-content-center align-items-center">
                        <a class="movie" href="#">
                            <img src="img/home/` + popular_movies[j].poster + `" class="img-fluid border_radius">
                            <img class="hd-symbol img-fluid" src="img/home/hd-symbol.png">
                        </a>
                        <p>مشاهدة فيلم ` + popular_movies[j].name + (popular_movies[j].isTranslated ? ` مترجم` : ``) + `</p>
                        <section class="d-flex justify-content-center">
                            <section class="px-1">
                                <span class="px-2">2019</span>
                            </section>
                            <section class="px-1">` +
                ((popular_movies[j].rating % Math.floor(popular_movies[j].rating) == 0) ? popular_movies[j].rating + `.0` : popular_movies[j].rating) +
                `<img src="img/home/rating_star.png" class="img-fluid">
                            </section>
                        </section>
                    </section>
                `)
        }

        n += width;

        $('.carousel .carousel-inner').append(`
                </section>
                </div>
            `);
    }

    $('.carousel-item:first').addClass('active');

    /* Popular movies carousel handle */

    // Create the movies list

    movies = [{
            name: 'It',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'Joker',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'Zombieland',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'Aladdin',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'Maleficent',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'الممر',
            rate: 3,
            isTranslated: false,
            type: 'movie'
        },
        {
            name: 'الكنز',
            rate: 4,
            isTranslated: false,
            type: 'movie'
        },
        {
            name: 'Avengers: Endgame',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'Captain Marvel 2019',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'Toy Story 4',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'My Hero Academia',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'نصيبى و قسمتك 3',
            rate: 2,
            isTranslated: false,
            type: 'series'
        },
        {
            name: 'عائلة الحاج نعمان',
            rate: 5,
            isTranslated: false,
            type: 'series'
        },
        {
            name: 'Big Cat Week 2015',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'Pets 2',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'Living With Yourself',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'اصطدام',
            rate: 5,
            isTranslated: false,
            type: 'series'
        },
        {
            name: 'The Flash',
            rate: 5,
            isTranslated: true,
            type: 'series'
        },
        {
            name: 'سبع البرمبة',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        },
        {
            name: 'Suits',
            rate: 5,
            isTranslated: true,
            type: 'series'
        },
        {
            name: 'الممر',
            rate: 3,
            isTranslated: false,
            type: 'movie'
        }, {
            name: 'الكنز',
            rate: 4,
            isTranslated: false,
            type: 'movie'
        }, {
            name: 'Avengers: Endgame',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        }, {
            name: 'Captain Marvel 2019',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        }, {
            name: 'Toy Story 4',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        }, {
            name: 'My Hero Academia',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        }, {
            name: 'نصيبى و قسمتك 3',
            rate: 2,
            isTranslated: false,
            type: 'series'
        }, {
            name: 'عائلة الحاج نعمان',
            rate: 5,
            isTranslated: false,
            type: 'series'
        }, {
            name: 'Big Cat Week 2015',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        }, {
            name: 'Pets 2',
            rate: 5,
            isTranslated: true,
            type: 'movie'
        }
    ]

    for (var i = 0; i < movies.length; i++) {

        if (i % 5 == 0) {
            $('.movies .container .row').append(`
                <section class="offset-xl-1 d-lg-block d-none"></section>
            `)
        }

        $('.movies .container .row').append(`
            <section class="movie-poster col-xl-2 col-lg-3 col-sm-4 col-12 text-center">
                <section class="position-relative d-sm-block d-inline-block">
                    <img src="img/home/` + i + `.png" class="poster-movie border_radius">
                    <div class="overlay"></div>
                    <section class="download">
                        <a href="#">
                            <img src="img/home/download (1)@1X.png" class="img-fluid">
                        </a>
                    </section>
                    <section class="play">
                        <a href="#">
                            <img src="img/home/play-circle@1X.png" class="img-fluid">
                        </a>
                    </section>
                    <section class="rate">
                </section>
                `);

        for (let k = 0; k < movies[i].rate; k++) {
            $('.rate:last').append(`
                <img src = "img/home/favorite@1X.png" class = "img-fluid" >
            `)
        }

        $('.movies .container .row .movie-poster:last').append(`
            </section>
                <p class = "watch" > مشاهدة ` + ((movies[i].type == 'movie') ? `فيلم ` : `مسلسل `) +
            movies[i].name + (movies[i].isTranslated ? ` مترجم` : ``) +
            ` </p>
            </section>
        `);

        if ((i + 1) % 5 == 0) {
            $('.movies .container .row .movie-poster:last').addClass('offset-xl-1');
        }
    }

    $('.movie-poster .overlay').width($('.movie-poster .overlay').prev().width());
    $('.movie-poster .overlay').height($('.movie-poster .overlay').prev().height());
    $('.movie-poster .rate').width($('.movie-poster .poster-movie').eq(0).width());

})