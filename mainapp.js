var db = require('./connectMongo.js');

/*db.FindinCollections().then(function(items) {
    console.info('The promise was fulfilled with items!', items);*/
db.FindinCollections().then(function(count) {
    console.info('The total count in the Collection is: ', count);
}, function (err) {
    console.error ('The promise was rejected!', err, err.stack);
});
