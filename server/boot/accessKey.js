'use strict';

module.exports = function(app) {
    var Accesskey = app.models.Accesskey;
    var IDS = [];
    for (var index = 0; index < 11; index++) {
        setInterval(function() {
            var a = new Date();
            console.log(a.getTime());
            IDS.push(a.getTime());
        }, 2000);
    }
};