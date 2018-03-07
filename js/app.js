// In case IG changed its Privacy Police
    // INSTAGRAM API
    // https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=1352781376.1605047.18ff2a951adc4b5e809a8155b484ec88


//*************************************************************//
//******************* >>> The App Code <<< ********************//
//*************************************************************//

// Array of markers
let markersArray = [
    {
        coords: {lat:43.092461,lng:-79.047150},
        content: '<h1>Niagara Falls, NY</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/19533694_690335644497317_5561877352901771264_n.jpg" />'
    },
    {
        coords:{lat:39.000668,lng:-74.799332},
        content:`<h1>Morey's Piers, Wildwood, NJ</h1>`,
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/21690029_504227456590441_546644110082048000_n.jpg" />',
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    },
    {
        coords:{lat:40.759384,lng:-73.981809},
        content: '<h1>1221 Avenue of the Americas, NY</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/21826934_383302345420954_3084001838123450368_n.jpg" />'
    },
    {
        coords: {lat: 40.650002, lng: -73.949997},
        content: '<h1>Wiliamsburg, NY</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/21984819_1911271045859223_346769839798353920_n.jpg" />'
    },
    {
        coords: {lat: 36.016066, lng: -114.737732},
        content: '<h1>Hover Dam, NV</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/22221192_2028727194025210_8798844335308144640_n.jpg" />'
    },
    {
        coords: {lat: 36.016076, lng: -114.737732},
        content: '<h1>Hover Dam, NV</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/22220891_180492519186322_9186401521011523584_n.jpg" />'
    },
    {
        coords: {lat: 37.4799417, lng: -122.449833},
        content: '<h1>Venice Beach, CA</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/24174977_1925323721065173_3305796010873192448_n.jpg" />'
    },
    {
        coords: {lat: 36.056595, lng: -112.125092},
        content: '<h1>Grand Canyon, AZ</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/22344716_140854326531748_974703245408600064_n.jpg" />'
    },
    {
        coords: {lat: 40.748817, lng: -73.985428},
        content: '<h1>Empire State Building, NY</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/21980313_708442472692706_6309783918237188096_n.jpg" />'
    },
    {
        coords: {lat: 40.7527262, lng: -73.9772294},
        content: '<h1>Grand Central Station, NY</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/21827884_339407423172329_3530428770458533888_n.jpg" />'
    },
    {
        coords: {lat: 40.785091, lng: -73.968285},
        content: '<h1>Central Park, NY</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/21689381_118517165498490_2987421428229341184_n.jpg" />'
    },
    {
        coords: {lat: 42.3736158, lng: -71.1097335},
        content: '<h1>Cambridge, MA</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/21827041_1395491300569281_8918546710230204416_n.jpg" />'
    },
    {
        coords: {lat: 38.9917797, lng: -74.8148894},
        content: '<h1>Wildwood Beach, NJ</h1>',
        image: '<img width="350px" height="540px" src="https://scontent-waw1-1.cdninstagram.com/vp/19428697_725758317616964_718913513157820416_n.jpg" />'
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
    };
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
            content:'<h1>Custom location in progress...</h1>',
            image: '<p>Willing to put some pic of the location here</p>'
        };

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

// Create labels with a single alphabetical character for markers
let labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let labelIndex = 0;

// Add Marker Function
function addMarker(givenMap,props){
    let marker = new google.maps.Marker({
        position:props.coords,
        label: labels[labelIndex++ % labels.length],
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