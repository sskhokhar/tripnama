'use strict';

module.exports = function(Country) {
    Country.validatesUniquenessOf('title', { message: 'Page with this title already exists.' });
};