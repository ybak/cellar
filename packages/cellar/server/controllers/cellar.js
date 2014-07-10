'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Wine = mongoose.model('Wine'),
    _ = require('lodash');

exports.findAll = function(req, res) {
    Wine.find(function(err, docs) {
        res.send(docs);
    });
};

exports.findById = function(req, res) {
    var id = req.params.id;
    Wine.findById(id, function(err, wine){
        res.send(wine);
    });
};

exports.updateWine = function (req, res) {
    var wine = req.body;
    var wineId = wine._id;
    delete wine._id;
    Wine.update({ _id: wineId }, wine, function (err, numberAffected) {
        console.log(numberAffected + ' wines updated');
        res.send(wine);
    });
};

exports.deleteWine = function (req, res) {
    var wineId = req.params.id;
    Wine.remove({ _id: wineId }, function (err, wine, numberAffected) {
        console.log(numberAffected + ' wines deleted');
        res.send(req.body);
    });
};

exports.create = function(req, res) {
    var newWine = req.body;
    delete newWine._id;
    console.log('Adding wine: ' + JSON.stringify(newWine));
    Wine.create(newWine, function(err, doc) {
        console.log('wine added.'+ JSON.stringify(doc));
        res.send(doc);
    });
};

