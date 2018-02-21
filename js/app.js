$(document).ready(function() {
    (function( $, google ) {

        let map = new google.maps.Map( document.getElementById( 'map' ), {
            zoom: 8,
            center: new google.maps.LatLng(40.730610, -73.935242),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        // let map;
        // function initMap(){
        //     map = new google.maps.Map( document.getElementById( 'map' ), {
        //         zoom: 8,
        //         center: new google.maps.LatLng(40.730610, -73.935242),
        //         mapTypeId: google.maps.MapTypeId.ROADMAP
        //     });
        // }

        $('.btn-group').colorDrop({
            onChange: function() {
                changeMapStyles( map );
            }
        });

        $('#map').height($(window).height());

        function changeMapStyles( map ) {

            let hueColor = $('#hue-list').colorDrop('val'),
                roadColor = $('#road-list').colorDrop('val'),
                waterColor = $('#water-list').colorDrop('val'),
                parkColor = $('#park-list').colorDrop('val'),
                landscapeColor = $('#landscape-list').colorDrop('val');

            let featureOpts = [
                {
                    stylers: [
                        { hue: hueColor }
                    ]
                },{
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }]
                },{
                    featureType: "road",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: roadColor
                    }]
                },{
                    featureType: "water",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: waterColor
                    }]
                },
                {
                    featureType: "poi"
                    ,stylers: [{
                        visibility: "on"
                    }, {
                        color: parkColor
                    }]
                },
                {
                    featureType: "landscape",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: landscapeColor
                    }]
                }
            ];

            map.setOptions({
                styles: featureOpts
            });

        };

        changeMapStyles( map );

    })
    ( jQuery, google );

});