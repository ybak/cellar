'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Cellar = new Module('cellar');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Cellar.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Cellar.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
//    Cellar.menus.add({
//        title: 'cellar',
//        link: 'cellar home',
//        roles: ['anonymous'],
//        menu: 'main'
//    });

    Cellar.menus.add({
        'roles': ['anonymous'],
        'title': 'Browse Wines',
        'link': 'browse wines'
    });


    Cellar.menus.add({
        'roles': ['anonymous'],
        'title': 'Add Wines',
        'link': 'add wines'
    });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Cellar.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Cellar.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Cellar.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Cellar;
});
