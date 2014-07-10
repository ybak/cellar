'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var WineSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: String,
        required: true,
        trim: true
    },
    grapes: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    region: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    picture: String
});


/**
 * Validations
 */
WineSchema.path('name').validate(function (name) {
    return !!name;
}, 'Name cannot be blank');

WineSchema.path('year').validate(function (year) {
    return !!year;
}, 'Year cannot be blank');

/**
 * Statics
 */
WineSchema.statics.load = function (id, cb) {
    this.findOne({
        _id: id
    }, cb);
};

mongoose.model('Wine', WineSchema);
