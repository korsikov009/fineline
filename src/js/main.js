"use strict";

$(document).ready(function() {

    var array = [
        'Australia',
        'Austria',
        'Argentina',
        'Brazil',
        'Egypt',
        'Estonia',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Israel',
        'India',
        'Indonesia',
        'Ireland',
        'Iceland',
        'Italy',
        'Japan',
        'Korea',
        'Netherlands',
        'Russian Federation',
        'Romania',
        'Serbia',
        'Singapore',
        'Spain',
        'Sweden',
        'Switzerland',
        'Turkey',
        'Uganda',
        'United Arab Emirates',
        'United Kingdom',
        'United States of America',
        'Uruguay'
    ];

    var select = new Select();

    select.createOptions(array, 'form__select', 'form__option');

    $('select').styler({
        selectPlaceholder: 'Country'
    });

    select.reverseArrowDown('.jq-selectbox__dropdown ul', '.jq-selectbox__dropdown');
});