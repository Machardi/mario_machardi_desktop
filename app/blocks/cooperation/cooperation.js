$(function () {
    $('[play-audio-link]').on('click', function () {
        $('#player')[0].play();

        $('[play-audio]').addClass('hide').removeClass('show');
        $('[pause-audio]').addClass('show').removeClass('hide');
    });

    $('[play-audio]').on('click', function () {
        $('#player')[0].play();

        $('[play-audio]').toggleClass('show').toggleClass('hide');
        $('[pause-audio]').toggleClass('show').toggleClass('hide');
    });

    $('[pause-audio]').on('click', function () {
        $('#player')[0].pause();

        $('[play-audio]').toggleClass('show').toggleClass('hide');
        $('[pause-audio]').toggleClass('show').toggleClass('hide');
    });
});