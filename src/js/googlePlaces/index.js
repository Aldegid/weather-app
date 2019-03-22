export default function initialize () {

    const input = document.getElementById('search');

    let options = {
        types: ['(cities)'],
        //componentRestrictions: {country: 'ua'}
    };

    let autocomplete = new google.maps.places.Autocomplete(input, options);

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        let place = autocomplete.getPlace();
        // let lat = place.geometry.location.lat();
        // let lng = place.geometry.location.lng();
    });

}
