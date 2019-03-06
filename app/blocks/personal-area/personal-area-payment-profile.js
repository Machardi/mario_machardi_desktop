$(function () {
    $('.personal-area-payment-profile [change-profile]').on('click', function () {
        $(this).hide();
        $('[cancel-form]').show();
        $('[save-profile]').prop('disabled', false);
        $('[create-new-profile]').prop('disabled', true);

        $('[current-profile]').hide();
        $('[change-current-profile]').show();
        $('[create-new-profile-form]').hide();
    });

    $('.personal-area-payment-profile [cancel-form]').on('click', function () {
        $(this).hide();
        $('[change-profile]').show();
        $('[save-profile]').prop('disabled', true);
        $('[create-new-profile]').prop('disabled', false);

        $('[current-profile]').show();
        $('[change-current-profile]').hide();
        $('[create-new-profile-form]').hide();
    });

    $('.personal-area-payment-profile [create-new-profile]').on('click', function () {
        $('[change-profile]').hide();
        $('[cancel-form]').show();

        $(this).prop('disabled', true);
        $('[save-profile]').prop('disabled', false);

        $('[current-profile]').hide();
        $('[change-current-profile]').hide();
        $('[create-new-profile-form]').show();
    });
});