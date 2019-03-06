$(function () {
    $('[print]').on('click', function () {
        let self = $(this),
            itemPrint = self.attr(document.body);
            // itemPrint = self.attr('print');

        $(itemPrint).print({
            globalStyles: true,
            mediaPrint: true,
            stylesheet: null,
            // noPrintSelector: ".no-print",
            iframe: true,
            append: null,
            prepend: null,
            manuallyCopyFormValues: true,
            deferred: $.Deferred(),
            timeout: 0,
            title: null,
            doctype: '<!doctype html>'
        });
    });

    $('[data-toggle="tooltip"]').tooltip();
});