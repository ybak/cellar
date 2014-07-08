'use strict';

// The Package is past automatically as first parameter
module.exports = function(Cellar, app, auth, database) {

    app.get('/cellar/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/cellar/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/cellar/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/cellar/example/render', function(req, res, next) {
        Cellar.render('index', {
            package: 'cellar'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
