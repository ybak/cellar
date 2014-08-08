'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Wine = mongoose.model('Wine');

exports.findAll = function (req, res) {
    var page = req.query.page || 1,
        limit = req.query.limit || 8;

    //Todo not scale
    Wine.paginate({}, page, limit, function (error, pageCount, paginatedResults, itemCount) {
        if (error) {
            res.send(error);
        } else {
            res.send({page: page, pageCount: pageCount, limit: limit, itemCount: itemCount, items: paginatedResults});
        }
    });
};

exports.findById = function (req, res) {
    var id = req.params.id;
    Wine.findById(id, function (err, wine) {
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

exports.create = function (req, res) {
    var newWine = req.body;
    delete newWine._id;
    newWine.picture = newWine.picture || "/cellar/assets/pics/generic.jpg";
    console.log('Adding wine: ' + JSON.stringify(newWine));
    Wine.create(newWine, function (err, doc) {
        console.log('wine added.' + JSON.stringify(doc));
        res.send(doc);
    });
};

