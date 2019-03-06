$(function () {
    $('[sort-table]').on('click', function () {
        $(this).find('.fa')
            .toggleClass('fa-angle-down')
            .toggleClass('fa-angle-up');
    });

    $('[hide-image]').on('click', function () {
        $(this).find('.fa')
            .toggleClass('fa-angle-down')
            .toggleClass('fa-angle-up');

        $(this).closest('tr').find('.good__image').fadeToggle();
    });
});