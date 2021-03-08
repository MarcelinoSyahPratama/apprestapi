'use strict';

module.exports = function(app){
    var jsonku = reuire('/controller');

    app.route('/')
        .get(jsonku.index);
}