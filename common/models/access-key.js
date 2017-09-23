'use strict';

module.exports = function(Accesskey) {
    Accesskey.verify = function(key, callback) {
        Accesskey.find({ where: { key: key } }, function(err, success) {
            if (!err) {
                if (success.length > 0 && success[0].status == true) {
                    callback(null, "true");
                } else {
                    callback(null, "false");
                }
            } else {
                callback(err, null);
            }
        })
    };
};