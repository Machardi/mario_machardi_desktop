$(function () {
    let topmenu = $('.topmenu'),
        generalItem = $('.topmenu__general_item'),
        submenuItem = $('.topmenu__submenu_item');

    generalItem.hover(function () {
        let self = $(this);

        //if (self.find('.topmenu__submenu').length && !self.hasClass('topmenu__general_item_active')) {
            self.toggleClass('topmenu__general_item_hover');

            self.closest('.topmenu__general').find('.topmenu__submenu').hide();

            self.find('.topmenu__submenu').removeAttr('style');
        //}

        if (self.closest('.topmenu').find('.topmenu__general_item_active') && !self.hasClass('topmenu__general_item_active')) {
            self.closest('.topmenu').find('.topmenu__general_item_active')
                .addClass('topmenu__general_item_hide-border');
        }
    }, function () {
        let self = $(this);

        //if (self.find('.topmenu__submenu').length && !self.hasClass('topmenu__general_item_active')) {
            self.toggleClass('topmenu__general_item_hover');

            self.closest('.topmenu__general').find('.topmenu__submenu').removeAttr('style');
        //}

        if (self.closest('.topmenu').find('.topmenu__general_item_active') && !self.hasClass('topmenu__general_item_active')) {
            self.closest('.topmenu').find('.topmenu__general_item_active')
                .removeClass('topmenu__general_item_hide-border');
        }
    });

    submenuItem.hover(function () {
        let self = $(this);

        if (self.find('.topmenu__submenu-two-level').length) {
            self.find('.topmenu__submenu_link').addClass('topmenu__submenu_link_active')
                .next('.topmenu__submenu-two-level').addClass('topmenu__submenu-two-level_active');
        }
    }, function () {
        let self = $(this);

        if (self.find('.topmenu__submenu-two-level').length) {
            self.find('.topmenu__submenu_link').removeClass('topmenu__submenu_link_active')
                .next('.topmenu__submenu-two-level').removeClass('topmenu__submenu-two-level_active');
        }
    });
});