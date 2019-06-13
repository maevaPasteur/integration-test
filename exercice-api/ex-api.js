(function ($) {

    'use strict';

    $(document).ready(function () {

        var pokemonNameField = $('.pokemon-name'),
            pokemonWeightField = $('.pokemon-weight'),
            pokemonOrderField = $('.pokemon-order');


        pokemonNameField.text(getPokemon(name));
        pokemonWeightField.text(getPokemon(weight));
        pokemonOrderField.text(getPokemon(order));
    });

    function getPokemon(attribute) {
        // API => https://pokeapi.co
    }

})(jQuery);