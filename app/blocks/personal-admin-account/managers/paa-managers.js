$(function () {
    $('.paa-managers [new-manager]').on('click', function () {
        $('.paa-managers [new-manager]').hide();
        $('.paa-managers [add-manager], .paa-managers [cancel-add-manager]').show();

        $('.paa-managers .personal-admin-account__table').hide();
        $('.paa-managers .paa-managers-manager_new-manager').show();
    });
    $('.paa-managers [add-manager]').on('click', function () {
        $('.paa-managers [new-manager]').show();
        $('.paa-managers [add-manager], .paa-managers [cancel-add-manager]').hide();

        $('.paa-managers .personal-admin-account__table').show();
        $('.paa-managers .paa-managers-manager_new-manager').hide();
    });
    $('.paa-managers [cancel-add-manager]').on('click', function () {
        $('.paa-managers [new-manager]').show();
        $('.paa-managers [add-manager], .paa-managers [cancel-add-manager]').hide();

        $('.paa-managers .personal-admin-account__table').show();
        $('.paa-managers .paa-managers-manager_new-manager').hide();
    });

    $('.paa-managers [edit-manager]').on('click', function () {
        $('.paa-managers [edit-manager]').hide();
        $('.paa-managers [save-manager-edit], .paa-managers [cancel-manager-edit]').show();

        $('.paa-managers .paa-managers-manager__content').hide();
        $('.paa-managers .paa-managers-manager__edit').show();
    });
    $('.paa-managers [save-manager-edit]').on('click', function () {
        $('.paa-managers [edit-manager]').show();
        $('.paa-managers [save-manager-edit], .paa-managers [cancel-manager-edit]').hide();

        $('.paa-managers .paa-managers-manager__content').show();
        $('.paa-managers .paa-managers-manager__edit').hide();
    });
    $('.paa-managers [cancel-manager-edit]').on('click', function () {
        $('.paa-managers [edit-manager]').show();
        $('.paa-managers [save-manager-edit], .paa-managers [cancel-manager-edit]').hide();

        $('.paa-managers .paa-managers-manager__content').show();
        $('.paa-managers .paa-managers-manager__edit').hide();
    });


    $('.personal-admin-account__file-choose').on('change', function (e) {
        if (e.target.files.length) {
            let filename = e.target.files[0].name;

            $(this).find('.personal-admin-account__file-choose_field').val(filename);
        } else {
            $(this).find('.personal-admin-account__file-choose_field').val('');
        }
    });
});