// In case you want to acually use DOMContentLoaded event uncoment this:
// $(document).ready(function() {
//     //     // INSTAGRAM API
//     //     // https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=1352781376.1605047.18ff2a951adc4b5e809a8155b484ec88
// });

//*************************************************************//
//********** >>> This is where magic happens ;p  <<< **********//
//*************************************************************//

// Array of markers
let markersArray = [
    {
        coords: {lat:43.092461,lng:-79.047150},
        content: '<h1>Niagara Falls, NY</h1>',
        image: '<iframe src="//lightwidget.com/widgets/61b27e15ff855764a86ffdcd3de6946b.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; height: 340px; border: 0;"></iframe>'
    },
    {
        coords:{lat:39.000668,lng:-74.799332},
        content:`<h1>Morey's Piers, Wildwood, NJ</h1>`,
        image: '<iframe src="//lightwidget.com/widgets/4a369bf19f3c591087fd34a3b91bd558.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; height: 440px; border: 0;"></iframe>',
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    },
    {
        coords:{lat:40.759384,lng:-73.981809},
        content: '<h1>1221 Avenue of the Americas, NYC</h1>',
        image: '<iframe src="//lightwidget.com/widgets/81451c9b75d555edaa5e9ed440aa62e8.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; height: 540px; border: 0;"></iframe>'
    },
    {
        coords: {lat: 40.650002, lng: -73.949997},
        content: '<h1>Wiliamsburg, NYC</h1>',
        image: '<iframe src="//lightwidget.com/widgets/d2d273f5a8c95db3be5eecbefa622daa.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; height: 340px; border: 0;"></iframe>'
    },
    {
        coords: {lat: 36.016066, lng: -114.737732},
        content: '<h1>Hover Dam, NV</h1>',
        image: '<iframe src="//lightwidget.com/widgets/9307df27b6eb5ba9a35e3008f138c0e2.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; height: 340px; border: 0;"></iframe>'
    },
    {
        coords: {lat: 36.016076, lng: -114.737732},
        content: '<h1>Hover Dam, NV</h1>',
        image: '<iframe src="//lightwidget.com/widgets/312e19a56ec35f019574989e298a08e9.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; height: 340px; border: 0;"></iframe>'
    }
];

// Initializing map function:
function initMap(){  // Map with options

    // grab map element:
    const mapElement = document.getElementById( 'map' );
    //configure map settings object:
    const mapConfig = {
        zoom: 8,
        center: new google.maps.LatLng(40.730610, -73.935242),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    // create new map object
    let map = new google.maps.Map(mapElement, mapConfig);

    // set size of map to full height
    $('#map').height($(window).height());

    // render predefined markers:
    renderPredefinedMarkers(map,markersArray);

    //this allows to change colors on map
    $('.btn-group').colorDrop({
        onChange: function() {
            changeMapStyles( map );
        }
    });


    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        const pointProperties = {
            coords:{lat:event.latLng.lat(),lng:event.latLng.lng()},
            content:'<h1>Custom locatioin in progress...</h1>',
            image: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/BZmS3g5lWlb/" data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/BZmS3g5lWlb/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Post udostępniony przez Oliwia | Poland (@oliwkoworudecudo)</a> <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-09-28T20:37:06+00:00">Wrz 28, 2017 o 1:37 PDT</time></p></div></blockquote> <script async defer src="//www.instagram.com/embed.js"></script>'
        }

        addMarker(map,pointProperties);
    });

}



// Render predefined points function
function renderPredefinedMarkers(givenMap, markers){
    // Loop through markers
    for(let i = 0;i < markers.length;i++){
        // Add marker
        addMarker(givenMap,markers[i]);
    }
}

// Add Marker Function
function addMarker(givenMap,props){
    let marker = new google.maps.Marker({
        position:props.coords,
        map:givenMap,
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
            content:props.content + props.image
        });

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
    }
}

// Customizing function
function changeMapStyles( givenMap ) {

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

    givenMap.setOptions({
        styles: featureOpts
    });

};