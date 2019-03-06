$(function () {
    $('[toggle-info-shop]').on('click', function () {
        let self = $(this),
            mapElement = self.parent().find('.shops__info-shop_map'),
            idMap = mapElement.attr('id'),
            mapData = mapsData[idMap];

        self.toggleClass('shops__info-shop_city-shop-btn_open');

        self.parent().find('.shops__info-shop_wrapper').slideToggle().toggleClass('shops__info-shop_wrapper_open');

        self.find('.fa').toggleClass('fa-angle-down').toggleClass('fa-angle-up');

        if (!mapElement.hasClass('map-init')) {
            // Инициализация Yandex.Map
            var myMap = new ymaps.Map(idMap, {
                    center: mapData.center,
                    zoom: mapData.zoom
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                objectManager = new ymaps.ObjectManager({
                    clusterize: true,
                    gridSize: 32
                });

            objectManager.objects.options.set('preset', 'islands#blueDotIcon');
            objectManager.clusters.options.set('preset', 'islands#blueClusterIcons');
            myMap.geoObjects.add(objectManager);

            objectManager.add(mapData.map_data);
            mapElement.addClass('map-init');
        }
    });
});