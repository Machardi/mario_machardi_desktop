$(function () {
    $('.personal-area-password [cancel-form]').on('click', function () {
        $(this).closest('form').find('input, textarea').val('');
    });
});