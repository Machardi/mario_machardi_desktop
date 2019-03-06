$(function () {
    $('.catalog-filter__select').chosen({width: '100%'}).change(function (e) {
        console.log(e);
    });

    $('.catalog-filter__price').chosen({width: '100%'}).change(function (e) {
        console.log(e);
    });

    $('[more-filters-button]').on('click', function () {
        let self = $(this);
        $('.catalog-items__title').addClass("active")
        $('[more-filters-block]').slideToggle();

        self.addClass('more-filters-active');
    });

    $('[reset-filters-button]').on('click', function () {
        window.location.reload();
    });
});