$(function () {
    $('[data-refinement-options] input, .certain-dealers .distribution__checkbox input')
        .each(function (index, element) {
            $(element).on('change', function () {
                enabledCheckboxOptions($('[data-refinement-options] input, .certain-dealers .distribution__checkbox input'));
            });
        });

    $('[unsubscribe-form-email], [unsubscribe-form-sms]').on('click', function () {
        $(this).closest('.distribution__row_content').find('.distribution__checkbox input')
            .prop('checked', false);
    });

    $('.distribution__select-dropdown_button').on('click', function () {
        if ($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', 'true');
            $(this).next().show();
        } else {
            $(this).attr('aria-expanded', 'false');
            $(this).next().hide();
        }
    });

    $('.distribution__checkbox input').on('change', function () {
        changeTextButton($(this).closest('.distribution__select-dropdown'), $(this));
    });

    $('.distribution__select-dropdown').each(function (index, element) {
        changeTextButton(element, null);
    });

    $document.on('click', function (e) {
        if ($(e.target).closest('.distribution__select-dropdown_button, .distribution__select-dropdown_menu').length) return;

        $('.distribution__select-dropdown_button[aria-expanded="true"]')
            .attr('aria-expanded', 'false')
            .next().hide();
    });

    enabledCheckboxOptions($('[data-refinement-options] input, .certain-dealers .distribution__checkbox input'));

    function enabledCheckboxOptions(elements) {
        let columnInputs = $('[data-refinement-options-show] input'),
            hasChecked = false;

        $(elements).each(function (index, element) {
            if ($(element).prop('checked')) {
                hasChecked = true;
            }
        });

        if (hasChecked) {
            columnInputs.prop('disabled', false);
        } else {
            columnInputs.prop('checked', false);
            columnInputs.prop('disabled', true);
        }
    }

    function changeTextButton(parentElem, changeThisElem) {
        let selectedCheckbox = [],
            buttonText;

        $(parentElem).find('.distribution__checkbox input').each(function (index, element) {
            if ($(element).prop('checked')) {
                selectedCheckbox.push($(element).next().text());
            }

            if (changeThisElem !== null) {
                if ($(changeThisElem).attr('name') == 'all') {
                    $(parentElem).find('.distribution__checkbox input:not([name="all"])').prop('checked', false);
                } else {
                    $(parentElem).find('.distribution__checkbox input[name="all"]').prop('checked', false);
                }
            }
        });

        buttonText = truncate(selectedCheckbox.join(', '), 25) || 'Выберите';

        $(parentElem).find('.distribution__select-dropdown_button span').html(buttonText);
    }

    function truncate(str, maxlength) {
        return (str.length > maxlength) ?
        str.slice(0, maxlength - 2) + '&hellip;' : str;
    }
});