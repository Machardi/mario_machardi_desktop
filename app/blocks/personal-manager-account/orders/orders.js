$(function () {
    $('[table-toggle-view]').on('click', function () {
        let self = $(this),
            hasView = self.attr('table-toggle-view');

        if (hasView == 'false') {
            self.attr('table-toggle-view', 'true').find('span').text('Свернуть таблицу');
            $('.pma-orders__detail-product').show();
        } else {
            self.attr('table-toggle-view', 'false').find('span').text('Развернуть таблицу');
            $('.pma-orders__detail-product').hide();
        }
    });
});