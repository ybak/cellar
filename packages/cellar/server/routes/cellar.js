'use strict';

var cellar = require('../controllers/cellar');

// The Package is past automatically as first parameter
module.exports = function (Cellar, app, auth, database) {

    app.route('/api/wines').get(cellar.findAll).post(cellar.create);

    app.route('/api/wines/:id').get(cellar.findById).put(cellar.updateWine).delete(cellar.deleteWine);

};


//app.get('/api/wines', wines.findAll);
//app.get('/api/wines/:id', wines.findById);
//app.put('/api/wines', wines.updateWine);
//app.delete('/api/wines/:id', wines.deleteWine);
//app.post('/api/wines', wines.create);
//app.get('/home/*',  function(req, res){
//    res.sendfile(__dirname+'/public/index.html');
//});