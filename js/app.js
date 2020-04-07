$(function () {

    // Initiate Navigation Bar

    $('body').prepend(`
        <nav class="navbar navbar-expand-lg py-0">
            <section class="container" dir="rtl">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">Yalla<span>Cima</span></a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-4" lang="AR" dir="rtl">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">أفلام عربى</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">أفلام أجنبي</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">مسلسلات عربى</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">مسلسلات أجنبي</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">إنمى</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">المزيد..</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" dir="rtl" type="search" aria-label="Search">
                        <a class="form-control"><img src="img/search@1X.png" class="img-fluid"></a>
                        <a class="user mr-lg-3 mr-auto d-flex align-items-center"><img src="img/user@1X.png"
                                width="30px" height="30px" class="img-fluid"></a>
                    </form>

                </div>
            </section>
        </nav>
    `)

    // Assign active-server class to active server link

    var serverItems = $('.view .servers .server a')
    serverItems.on('click', function () {
        serverItems.removeClass('active-server');
        $(this).addClass('active-server');
    })

    // Setup watched carousel

    $('.carousel').carousel({
        interval: 0
    });

    // Assign active-page class to active page link

    var pages = $('.pages a')
    pages.on('click', function () {
        pages.removeClass('active-page');
        $(this).addClass('active-page');
    })


})