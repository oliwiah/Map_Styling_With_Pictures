$(document).ready(function() {
    (function( $, google ) {

        // INSTAGRAM API
        // https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=1352781376.1605047.18ff2a951adc4b5e809a8155b484ec88

        let map = new google.maps.Map( document.getElementById( 'map' ), {
            zoom: 8,
            center: new google.maps.LatLng(40.730610, -73.935242),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        function initMap(){
            // Map with options
            let map = new google.maps.Map( document.getElementById( 'map' ), {
                zoom: 8,
                center: new google.maps.LatLng(40.730610, -73.935242),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            // Listen for click on map
            google.maps.event.addListener(map, 'click', function(event){
                // Add marker
                addMarker({coords:event.latLng});
            });

            // Array of markers
            let markers = [
                {
                    coords:{lat:43.092461,lng:-79.047150},
                    content:'<h1>Niagara Falls</h1>',
                    image: '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/BV7su0CF96Q/" data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BV7su0CF96Q/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Niagara Falls #falls #niagarafalls #waterfall #mountain #nature #landscape #mountainview #mountainside #nationalpark #nationalparkusa #holiday #travel #cieeworktravelers #vscocam</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">Post udostępniony przez <a href="https://www.instagram.com/oliwkoworudecudo/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Oliwia | Poland</a> (@oliwkoworudecudo) <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-06-29T18:01:35+00:00">Cze 29, 2017 o 11:01 PDT</time></p></div></blockquote> <script async defer src="//www.instagram.com/embed.js"></script>'
                },
                {
                    coords:{lat:39.000668,lng:-74.799332},
                    content:`<h1>Morey's Piers</h1>`,
                    image: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/BZKMB6OF_by/" data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/BZKMB6OF_by/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Post udostępniony przez Oliwia | Poland (@oliwkoworudecudo)</a> <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-09-17T22:38:37+00:00">Wrz 17, 2017 o 3:38 PDT</time></p></div></blockquote> <script async defer src="//www.instagram.com/embed.js"></script>',
                    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                },
                {
                    coords:{lat:40.759384,lng:-73.981809},
                    content:'<h1>1221 Avenue of the Americas</h1>',
                    image: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/BZO0w30lkPG/" data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/BZO0w30lkPG/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Post udostępniony przez Oliwia | Poland (@oliwkoworudecudo)</a> <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-09-19T17:51:31+00:00">Wrz 19, 2017 o 10:51 PDT</time></p></div></blockquote> <script async defer src="//www.instagram.com/embed.js"></script>'
                }
            ];

            // Loop through markers
            for(let i = 0;i < markers.length;i++){
                // Add marker
                addMarker(markers[i]);
            }

            // Add Marker Function
            function addMarker(props){
                let marker = new google.maps.Marker({
                    position:props.coords,
                    map:map,
                    //icon:props.iconImage
                });

                // Check for customicon
                if(props.iconImage){
                    // Set icon image
                    marker.setIcon(props.iconImage);
                }

                // Check content
                if(props.content){
                    let infoWindow = new google.maps.InfoWindow({
                        content:props.content
                    });

                    marker.addListener('click', function(){
                        infoWindow.open(map, marker);
                    });
                }
            }

        }

        // initMap();
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