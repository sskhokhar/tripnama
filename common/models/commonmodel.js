'use strict';

module.exports = function(Commonmodel) {
    Commonmodel.validatesUniquenessOf('title', { message: 'Page with this title already exists.' });
};