'use strict';

module.exports = function(app) {
    var Accesskey = app.models.Accesskey;
    var IDS = ['34562345', '09893102', '76092435', '33908412', '46509380'];
    for (var index = 0; index < IDS.length; index++) {
        var obj = {
            id: IDS[index],
            status: false
        }
        Accesskey.findOrCreate(obj, function(err, succ) {
            if (!err) {
                console.log(succ);
            } else {
                console.log(err);
            }
        });
    }

};