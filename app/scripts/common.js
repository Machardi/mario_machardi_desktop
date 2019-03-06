'use strict';

// Variables
var $document = $(document),
    $window = $(window),
    $body = $(document.body),
    BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || 'An unknown browser';
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || 'an unknown version';
            this.OS = this.searchString(this.dataOS) || 'an unknown OS';
            this.platform = this.searchPlatform(navigator.userAgent);
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        searchPlatform: function (dataString) {
            var mobilePlatforms = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i,
                desktopPlatforms = /Win|Mac|Linux/i,
                identityPlatform;
            identityPlatform = (mobilePlatforms.test(dataString) == true) ? 'mobile' :
                (desktopPlatforms.test(dataString) == true) ? 'desktop' :
                    'unknown platform';
            return identityPlatform;
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: 'Chrome',
                identity: 'Chrome'
            },
            {
                string: navigator.userAgent,
                subString: 'OmniWeb',
                versionSearch: 'OmniWeb/',
                identity: 'OmniWeb'
            },
            {
                string: navigator.vendor,
                subString: 'Apple',
                identity: 'Safari',
                versionSearch: 'Version'
            },
            {
                prop: window.opera,
                identity: 'Opera'
            },
            {
                string: navigator.vendor,
                subString: 'iCab',
                identity: 'iCab'
            },
            {
                string: navigator.vendor,
                subString: 'KDE',
                identity: 'Konqueror'
            },
            {
                string: navigator.userAgent,
                subString: 'Firefox',
                identity: 'Firefox'
            },
            {
                string: navigator.vendor,
                subString: 'Camino',
                identity: 'Camino'
            },
            {		// for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: 'Netscape',
                identity: 'Netscape'
            },
            {
                string: navigator.userAgent,
                subString: 'MSIE',
                identity: 'Explorer',
                versionSearch: 'MSIE'
            },
            {
                string: navigator.userAgent,
                subString: 'Gecko',
                identity: 'Mozilla',
                versionSearch: 'rv'
            },
            { 		// for older Netscapes (4-)
                string: navigator.userAgent,
                subString: 'Mozilla',
                identity: 'Netscape',
                versionSearch: 'Mozilla'
            }
        ],
        dataOS: [
            {
                string: navigator.platform,
                subString: 'Win',
                identity: 'Windows'
            },
            {
                string: navigator.platform,
                subString: 'Mac',
                identity: 'Mac'
            },
            {
                string: navigator.userAgent,
                subString: 'iPhone',
                identity: 'iPhone/iPod'
            },
            {
                string: navigator.platform,
                subString: 'Linux',
                identity: 'Linux'
            }
        ]
    };


BrowserDetect.init();

// console.log(BrowserDetect.browser);
// console.log(BrowserDetect.version);
// console.log(BrowserDetect.OS);
// console.log(BrowserDetect.platform);

if (BrowserDetect.OS == 'Mac') {
    $body.addClass('mac');
} else if (BrowserDetect.OS == 'Windows') {
    $body.addClass('windows')
} else if (BrowserDetect.OS == 'Linux') {
    $body.addClass('linux')
}

/**
 * Задержка события при ресайзе
 * @param options
 *
 * delay - задержка срабатывания события после ресайза. {number}
 *         По умолчанию 500 ms
 * callback - обратный вызов {function}
 */
function delayEventsResizing(options) {
    let time;

    window.onresize = function (e) {
        if (time) {
            clearTimeout(time);
        }

        time = setTimeout(function () {
            (options.callback)();
        }, options.delay || 500);
    }
}

let timeNotify;

function addLikeNatify() {
    if (timeNotify) {
        clearTimeout(timeNotify);
    }

    if (!$('.like-notify.added').length) {
        $('.page__wrapper').append('<div class="like-notify added"><div class="like-notify__wrapper">Товар добавлен в избранное</div></div>');
    }

    if ($('.like-notify.removed').length) {
        $('.like-notify.removed').remove();
    }

    timeNotify = setTimeout(function () {
        if ($('.like-notify.added').length) {
            $('.like-notify.added').remove();
        }
    }, 3000);
}

function removeLikeNatify() {
    if (timeNotify) {
        clearTimeout(timeNotify);
    }

    if (!$('.like-notify.removed').length) {
        $('.page__wrapper').append('<div class="like-notify removed"><div class="like-notify__wrapper">Товар удалён из избранного</div></div>');
    }

    if ($('.like-notify.added').length) {
        $('.like-notify.added').remove();
    }

    timeNotify = setTimeout(function () {
        if ($('.like-notify.removed').length) {
            $('.like-notify.removed').remove();
        }
    }, 3000);
}